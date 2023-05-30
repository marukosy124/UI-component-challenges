import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";

interface InputProps {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: "sm" | "md";
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number;
  style?: React.CSSProperties;
}
type PropsType = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> &
  InputProps;

const Input = ({ label, error, helperText, startIcon, endIcon, size, fullWidth, multiline, row, style, disabled, ...rest }: PropsType) => {
  return (
    <div className={`Input__container ${fullWidth ? "fullWidth" : ""}`} style={style}>
      <div className={`Input__innerContainer  ${error ? "error" : ""} ${disabled ? "disabled" : ""}  ${size}  ${fullWidth ? "fullWidth" : ""}`}>
        {startIcon && <span className={`Input__startIcon ${row && row > 2 ? "multiline" : ""}`}>{startIcon}</span>}
        {multiline ? (
          <textarea
            {...rest}
            rows={row}
            style={{
              maxHeight: row !== undefined ? `${row}rem` : "auto",
            }}
            className={`Input__input multiline ${error ? "error" : ""} ${startIcon ? "with-startIcon" : ""} ${endIcon ? "with-endIcon" : ""}`}
          />
        ) : (
          <input
            {...rest}
            disabled={disabled}
            className={`Input__input ${error ? "error" : ""} ${startIcon ? "with-startIcon" : ""} ${endIcon ? "with-endIcon" : ""}   ${fullWidth ? "fullWidth" : ""}`}
          />
        )}
        {endIcon && <span className={`Input__endIcon ${row && row > 2 ? "multiline" : ""}`}>{endIcon}</span>}
      </div>
      {label && (
        <label {...rest} className={`Input__label ${error ? "error" : ""}`}>
          {label}
        </label>
      )}
      {helperText && <span className={`Input__helperText ${error ? "error" : ""}`}>{helperText}</span>}
    </div>
  );
};

export default Input;
