import Paragraph from "../common/typography/Paragraph";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url('/store.avif')` }}
      className={`h-[200px] bg-cover bg-center text-center flex items-center justify-center`}
    >
      <Paragraph className="text-white text-3xl">
        STORE
        <br />
        우리들의 카페 위치
      </Paragraph>
    </div>
  );
};

export default Banner;
