import Paragraph from "../common/typography/Paragraph";

const Banner = ({ title, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[200px] bg-cover bg-center text-center flex items-center justify-center`}
    >
      <Paragraph className="text-white text-3xl">
        MENU
        <br />
        {title}
      </Paragraph>
    </div>
  );
};

export default Banner;
