import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkButtonProps } from '../../../types/buttons';

export const LinkButton: FC<LinkButtonProps> = ({ isActive = false, href, label }) => {
  return (
    <Link
      to={href}
      className={`${
        isActive
          ? 'bg-activeButton hover:bg-hoverActiveButton text-activeLabel'
          : 'border hover:bg-hoverButton hover:border-transparent text-label hover:text-activeLabel'
      } rounded-main py-3 px-6 transition-all`}>
      {label}
    </Link>
  );
};
