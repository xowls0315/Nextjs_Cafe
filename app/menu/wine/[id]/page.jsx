import Text from "@/components/common/base/Text";
import Container from "@/components/common/layout/Container";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;
  const data = await fetch("https://api.sampleapis.com/wines/reds");
  const newData = await data.json();
  const [wine] = newData.filter((v) => v.id === Number(id));
  console.log(wine);

  return (
    <Container className="py-10 px-8 md:px-0">
      <Text className="border-b-4 border-slate-700 py-2 my-5 block text-4xl font-bold">
        {wine.wine}
      </Text>
      <div className="flex gap-5">
        <div className="relative w-[400px] h-[600px]">
          <Image
            className="object-contain rounded-lg"
            src={wine.image}
            alt={""}
            fill
          />
        </div>
        <Paragraph className="text-xl">
          ⭐ 이 와인의 리뷰 수는 {wine.rating.reviews} 입니다!! ⭐
        </Paragraph>
      </div>
    </Container>
  );
};

export default Page;
