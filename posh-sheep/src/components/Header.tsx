import Link from 'next/link';

import { SITE_NAME } from '@/utils/constants';

const Header: React.FC = () => {
  return (
    <header className="py-2">
      <Link href="/">
        <a className="text-2xl font-bold text-green-500">{SITE_NAME}</a>
      </Link>
    </header>
  );
};

export default Header;