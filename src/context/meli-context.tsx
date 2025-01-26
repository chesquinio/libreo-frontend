"use client";
import { authMeliRequest, verifyMeliRequest } from "@/api/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./auth-context";

type MeliContextType = {
  meliAuth: boolean;
  signup: (code: string) => any;
  loading: boolean;
  errors: string | null;
  message: string | null;
};

const MeliContext = createContext<MeliContextType | null>(null);

export const useMeli = () => {
  const context = useContext(MeliContext);
  if (!context) {
    throw new Error("useMeli must be used within an MeliProvider");
  }
  return context;
};

export const MeliProvider = ({ children }: { children: ReactNode }) => {
  const [meliAuth, setMeliAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    async function checkMeliAuth() {
      if (user.user_id === null) {
        setMeliAuth(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyMeliRequest();
        if (res.status !== 200) {
          setMeliAuth(false);
          setLoading(false);
          return;
        }

        setMeliAuth(true);
        setLoading(false);
        return;
      } catch (error) {
        setMeliAuth(false);
        setLoading(false);
      }
    }
    checkMeliAuth();
  }, []);

  const signup = async (code: string) => {
    try {
      const { data } = await authMeliRequest(code);
      if (!data) {
        setMeliAuth(false);
        return;
      }

      setMeliAuth(true);
      setMessage(data.message);
    } catch (error: any) {
      setErrors(error.response.data.message);
    }
  };

  return (
    <MeliContext.Provider
      value={{ meliAuth, signup, loading, errors, message }}
    >
      {children}
    </MeliContext.Provider>
  );
};
