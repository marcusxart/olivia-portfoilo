import { createContext } from "react";
import type { MainContextType } from "../types";

const defaultContext: MainContextType = {
  theme: "light",
  isThreshold: false,
};
export const MainContext = createContext<MainContextType>(defaultContext);
