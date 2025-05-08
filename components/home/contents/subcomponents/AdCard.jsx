import PillButton from "@/components/common/button/PillButton";
import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const AdCard = ({ imageUrl, title, subTitle, buttonText }) => {
  return (
    <div className="w-full h-[300px] text-center flex flex-col items-center gap-3 my-5">
      <div className="w-full h-[170px] relative">
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
      <PillButton className={"text-[13px] text-white bg-[#00A5B9] "}>
        {buttonText}
      </PillButton>
    </div>
  );
};

export default AdCard;
