import axios from "./axios";

export const createSheetRequest = () => axios.get("/google/sheets/create");
