type Props = {
  isOpen: boolean;
  toggleButton: () => void;
};

const HamburgerMenu = ({ isOpen: open, toggleButton }: Props) => {
  return (
    <button
      className={`relative h-6 w-6 cursor-pointer transition-all duration-[250ms] ${
        open ? 'translate-y-0 rotate-90 transform-none' : ''
      }`}
      onClick={() => toggleButton()}
    >
      <span
        className={`absolute top-0 left-0 h-[2px] w-6 rotate-0 bg-nord-6 transition-all duration-500 content-none ${
          open ? 'translate-y-[6px] rotate-45' : ''
        }`}
      ></span>
      <span
        className={`absolute top-0 left-0 h-[2px] w-6 translate-y-[7px] rotate-0 bg-nord-6 transition-all duration-500 content-none ${
          open ? 'hidden' : ''
        }`}
      ></span>
      <span
        className={`absolute top-0 left-0 h-[2px] w-6 translate-y-[14px] rotate-0 bg-nord-6 transition-all duration-500 content-none ${
          open ? 'translate-y-[6px] -rotate-45' : ''
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
