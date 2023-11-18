import { FC, PropsWithChildren } from 'react';

export const WrapperBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full box-border shadow-lg bg-secondary p-6 rounded-main">{children}</div>
  );
};
