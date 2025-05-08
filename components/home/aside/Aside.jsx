import { FaInstagram, FaYoutube } from "react-icons/fa";

const Aside = () => {
  return (
    <div>
      <aside className="fixed md:top-[200px] md:right-[200px] bottom-4 right-4 flex flex-col gap-5 z-20">
        <div className="rounded-full text-white bg-[#3A466A] p-3 hover:bg-[#2a3555] transition-all duration-100 cursor-pointer">
          <FaInstagram />
        </div>
        <div className="rounded-full text-white bg-[#3A466A] p-3 hover:bg-[#2a3555] transition-all duration-100 cursor-pointer">
          <FaYoutube />
        </div>
      </aside>
    </div>
  );
};

export default Aside;
