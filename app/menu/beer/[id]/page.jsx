import Text from "@/components/common/base/Text";
import Container from "@/components/common/layout/Container";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;
  const data = await fetch("https://api.sampleapis.com/beers/ale");
  const newData = await data.json();
  const [beer] = newData.filter((v) => v.id === Number(id));
  console.log(beer);

  return (
    <Container className="py-10 px-8 md:px-0">
      <Text className="border-b-4 border-slate-700 py-2 my-5 block text-4xl font-bold">
        {beer.name}
      </Text>
      <div className="flex gap-5">
        <div className="relative w-[400px] h-[600px]">
          <Image
            className="object-contain rounded-lg"
            src={beer.image}
            alt={""}
            fill
          />
        </div>
        <Paragraph className="text-xl">
          ⭐ 이 맥주의 리뷰 수는 {beer.rating.reviews} 입니다!! ⭐
        </Paragraph>
      </div>
    </Container>
  );
};

export default Page;
