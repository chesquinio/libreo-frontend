import AuthGate from "@/components/gates/auth-gate";
import { MeliProvider } from "@/context/meli-context";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGate>
      <MeliProvider>{children}</MeliProvider>
    </AuthGate>
  );
}
