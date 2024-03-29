import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
