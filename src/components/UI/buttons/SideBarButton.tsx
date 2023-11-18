import { ButtonHTMLAttributes, FC } from 'react';

export const SideBarButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className="transition-all flex hover:bg-hoverButton hover:border-transparent items-center gap-2 border py-3 px-3 rounded-md">
      <div className="flex flex-col gap-1 w-8">
        <div className="h-1 bg-white"></div>
        <div className="h-1 bg-white"></div>
        <div className="h-1 bg-white"></div>
      </div>
      <span className="text uppercase">Фильтрация</span>
    </button>
  );
};
