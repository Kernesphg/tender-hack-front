import { Logo } from './UI/icons/Logo';
import { LinkButton } from './UI/buttons/LinkButton';
import { LinkButtonArray } from '../types/buttons';
import { useLocation } from 'react-router-dom';

const links: LinkButtonArray[] = [
  {
    href: '/',
    label: 'Я поставщик',
  },
  {
    href: '/client',
    label: 'Я клиент',
  },
];

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="border-b  p-7 flex justify-between items-center bg-main">
      <Logo />
      <nav className="flex items-center gap-2">
        {links.map((link) => (
          <LinkButton
            key={link.href}
            isActive={link.href === pathname}
            href={link.href}
            label={link.label}
          />
        ))}
      </nav>
    </header>
  );
};
