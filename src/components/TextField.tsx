import { forwardRef, useState } from "react";
import type { TextFieldProps } from "../types";
import { motion } from "motion/react";
import { textFieldAnimate } from "../constants/motion";
import classNames from "classnames";

/**
 * TextField component renders a styled input or textarea with animated placeholder.
 *
 * @param {TextFieldProps} props - Props including optional `type` ("textarea" for textarea, otherwise input)
 * @param {React.Ref<HTMLInputElement | HTMLTextAreaElement>} ref - Forwarded ref to input or textarea element
 * @returns {JSX.Element}
 */
const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(({ type, ...props }, ref) => {
  // Track if field is focused to control placeholder animation
  const [isFocus, setIsFocus] = useState(false);

  // Track current input value to control placeholder animation
  const [value, setValue] = useState("");

  // Cast props to textarea or input props accordingly for spreading
  const textareaProps =
    props as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  const inputProps = props as React.InputHTMLAttributes<HTMLInputElement>;

  // Base styling classNames
  const cn =
    "border-b border-[#636363] border-solid w-full transition-all duration-300 focus:border-white outline-0 h-[44px] text-xl relative z-[2]";

  return (
    <label className="text-white relative block">
      {/* Animated placeholder shown only if placeholder exists */}
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

      {/* Conditionally render textarea or input based on `type` prop */}
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

TextField.displayName = "TextField";

export default TextField;
