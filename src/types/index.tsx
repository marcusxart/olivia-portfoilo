import type React from "react";

export type Theme = "light" | "dark";

export interface MainContextType {
  theme: Theme;
  isThreshold: boolean;
}

export interface PageWrapperProps {
  children?: React.ReactNode;
}

export interface ChildrenProps {
  readonly children?: React.ReactNode;
}

export type TextFieldProps =
  | ({
      type?: "text" | "email" | "password";
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ type: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);
