import { AD_CARD_DATA } from "@/constants/AdCard";
import AdCard from "./subcomponents/AdCard";
import Heading from "../../common/typography/Heading";

const ContentsAside = () => {
  return (
    <div
      className={`w-full h-full bg-[#C8E2E0] flex-3/10 border border-slate-200 flex flex-col p-5`}
    >
      <Heading className={"text-[#00A5B9] font-bold mb-15"}>
        조금 더 특별하고
        <br />
        따뜻한, 그린 카페베네
      </Heading>
      {AD_CARD_DATA.map((v, i) => (
        <AdCard key={i} {...v} />
      ))}
    </div>
  );
};

export default ContentsAside;
