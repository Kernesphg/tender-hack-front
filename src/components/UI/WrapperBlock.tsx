import { FC, PropsWithChildren } from 'react';

export const WrapperBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="transition-all h-full box-border backdrop-blur-lg hover:backdrop-blur-sm shadow-lg bg-secondary/50 p-6 hover:p-10 rounded-main">
      {children}
    </div>
  );
};
