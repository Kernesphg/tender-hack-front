import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'password' | 'text' | 'email' | 'number' | 'date';
  placeholder: string;
  name: string;
}

export const Input: FC<InputProps> = ({ placeholder, type, name, ...rest }) => {
  return (
    <input
      className="outline-none w-full rounded-main bg-input p-3 transition-all"
      type={type}
      placeholder={placeholder}
      {...rest}
      name={name}
    />
  );
};
