import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLink } from './NavLink';

export const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-gray-700">
      <nav className="container mx-auto text-white">
        <NavLink active={router.pathname === '/'} href="/">
          Home
        </NavLink>
        <NavLink
          active={router.pathname === '/products-ssg'}
          href="/products-ssg"
        >
          Products SSG
        </NavLink>
        <NavLink
          active={router.pathname === '/products-csr'}
          href="/products-csr"
        >
          Products CSR
        </NavLink>
        <NavLink active={router.pathname === '/about'} href="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
};
