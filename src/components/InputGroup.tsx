import { FC, PropsWithChildren } from 'react';

interface InputGroupProps {
  label: string;
}

export const InputGroup: FC<PropsWithChildren<InputGroupProps>> = ({ label, children }) => {
  return (
    <div>
      <p className="text-2xl pb-3 pt-3 pl-2">{label}</p>
      <div className="flex gap-2">{children}</div>
    </div>
  );
};
