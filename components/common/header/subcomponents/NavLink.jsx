import Link from "next/link";

const NavLink = (props) => {
  return (
    <Link href={props.href}>
      <button className="text-gray-500 hover:text-sky-200 transition-all duration-200 font-medium text-lg cursor-pointer">
        {props.navName}
      </button>
    </Link>
  );
};

export default NavLink;
