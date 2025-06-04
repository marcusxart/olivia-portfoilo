import type React from "react";

export type Theme = "light" | "dark";

export interface MainContextType {
  theme: Theme;
}

export interface PageWrapperProps {
  children?: React.ReactNode;
}

export interface ChildrenProps {
  readonly children?: React.ReactNode;
}
