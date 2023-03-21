import Link from 'next/link';
import { useState } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import HamburgerMenu from '@/components/HamburgerMenu';
import Search from '@/components/Search';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const toggleHamburgerMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <Search open={searchIsOpen} />
      <div
        className={`sticky z-30 transition-all duration-500 ${
          scrollDirection === 'down' ? '-top-16' : 'top-0'
        }`}
      >
        <header
          className={`h-16 bg-nord-0 text-nord-4 transition-all duration-500`}
        >
          <div className="mx-auto h-full max-w-5xl">
            <div className="mx-6 flex h-full justify-between font-vt323">
              <Link
                href="/"
                className="z-20 my-auto text-2xl tracking-wider hover:text-nord-9"
              >
                yamamura
              </Link>
              <nav
                className={`fixed inset-0 z-10 my-auto flex-col gap-y-5
                bg-nord-3 px-6 pt-24 text-center text-2xl text-nord-6
                opacity-90 sm:static sm:flex-row sm:gap-x-6 sm:bg-inherit
                sm:px-0 sm:pt-0 ${open ? 'flex' : 'hidden sm:flex'}`}
              >
                {/* <nav
              className={`fixed inset-0 z-10 my-auto flex-col gap-y-5 bg-nord-3 px-6 pt-24 text-center text-2xl text-nord-6 opacity-90 md:static md:flex-row md:gap-x-6  md:bg-inherit md:px-0 md:pt-0 ${
                isOpen ? 'flex' : 'hidden md:flex'
              }`}
            > */}
                <Link href="/about">
                  <span className="uppercase underline-offset-4 hover:text-nord-9 hover:underline">
                    About
                  </span>
                </Link>
                <button onClick={() => setSearchIsOpen(true)} type="button">
                  <span className="uppercase underline-offset-4 hover:text-nord-9 hover:underline focus:outline-0">
                    Search
                  </span>
                </button>
                <Link href="https://github.com/yu-yamamura/yamamura-dot-log">
                  <span className="uppercase underline-offset-4 hover:text-nord-9 hover:underline">
                    GitHub
                  </span>
                </Link>
              </nav>
              <div className="z-30 my-auto sm:hidden">
                <HamburgerMenu
                  isOpen={open}
                  toggleButton={toggleHamburgerMenu}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
