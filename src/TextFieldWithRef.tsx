import React from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: "email" | "password" | "text";
  textarea?: boolean;
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(
  ({ onChange, textarea = false, placeholder, ...rest }, ref) => {
    const InputElement = textarea ? "textarea" : "input";
    return (
      <InputElement
        ref={ref as any}
        className="text-field"

        style={{ background: "linear-gradient(to right, #5DAFB1, #4F72A1 ,#4F3D7B)" }}
        placeholder={placeholder}
        onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
        {...rest}
      />
    );
  }
);

export default TextField;