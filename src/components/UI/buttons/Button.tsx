import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className="w-full bg-activeButton hover:bg-hoverActiveButton text-activeLabel rounded-main py-3 px-6 transition-all"
      {...rest}>
      {label}
    </button>
  );
};
