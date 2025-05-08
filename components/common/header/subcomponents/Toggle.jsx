import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Toggle = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden text-gray-500 cursor-pointer"
    >
      {isMenuOpen ? <MdCancel /> : <GiHamburgerMenu />}
    </button>
  );
};

export default Toggle;
