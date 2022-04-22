import Link from 'next/link';

interface NavLinkProps {
  active: boolean;
  href: string;
  children: string;
}

export const NavLink = ({ active, href, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className={`relative inline-block px-4 py-2 hover:bg-gray-400`}>
        {active && (
          <div className="absolute top-0 left-0 w-full h-1 bg-white" />
        )}
        {children}
      </a>
    </Link>
  );
};
