import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <>
      <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
        <ul className="flex flex-col items-center gap-4 py-4">
          <NavLink navName={"STORY"} href={"/story"} />
          <NavLink navName={"MENU"} href={"/menu"} />
          <NavLink navName={"STORE"} href={"/store"} />
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
