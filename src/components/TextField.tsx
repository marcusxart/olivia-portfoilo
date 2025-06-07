import { forwardRef, useState } from "react";
import type { TextFieldProps } from "../types";
import { motion } from "motion/react";
import { textFieldAnimate } from "../constants/motion";
import classNames from "classnames";

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(({ type, ...props }, ref) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const textareaProps =
    props as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  const inputProps = props as React.InputHTMLAttributes<HTMLInputElement>;
  const cn =
    "border-b border-[#636363] border-solid w-full transition-all duration-300 focus:border-white outline-0 h-[44px] text-xl relative z-[2]";
  return (
    <label className="text-white relative block">
      {props.placeholder && (
        <motion.span
          className="absolute left-0"
          animate={
            !value && !isFocus
              ? textFieldAnimate.animate
              : textFieldAnimate.initial
          }
          transition={textFieldAnimate.transition}
        >
          {props.placeholder}
        </motion.span>
      )}
      {type === "textarea" ? (
        <textarea
          className={classNames(cn, { "h-[100px] pt-[7px]": true })}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          {...textareaProps}
          onChange={(e) => {
            textareaProps.onChange?.(e);
            setValue(e.target.value);
          }}
          placeholder=""
        />
      ) : (
        <input
          className={cn}
          ref={ref as React.Ref<HTMLInputElement>}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          type={type || "text"}
          {...inputProps}
          onChange={(e) => {
            inputProps.onChange?.(e);
            setValue(e.target.value);
          }}
          placeholder=""
        />
      )}
    </label>
  );
});

TextField.displayName = "Text Field";

export default TextField;
