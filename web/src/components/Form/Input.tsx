import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
      {...props}
    />
  );
}
