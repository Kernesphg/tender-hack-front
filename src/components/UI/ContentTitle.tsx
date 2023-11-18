import { FC, PropsWithChildren } from 'react';

interface PageTitleProps {}

export const ContentTitle: FC<PropsWithChildren<PageTitleProps>> = ({ children }) => {
  return <p className="flex items-center gap-1 font-bold text-center text-3xl">{children}</p>;
};
