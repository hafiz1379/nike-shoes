/* eslint-disable */
import { RxHamburgerMenu } from 'react-icons/rx';
import { ReactComponent as NikeLogo } from '../assets/nike-logo.svg';

function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <a href="/" aria-label="Home">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button type="button" className="focus:ring-2 focus:ring-gray-200 p-2 rounded-lg">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}

export default Nav;
