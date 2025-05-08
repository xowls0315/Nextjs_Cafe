import Image from "next/image";
import Text from "../../common/base/Text";

const Wine = ({ wine, rating, image, winery }) => {
  const makeRate = (average) => +String(average).slice(0, 4);
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <div className="relative h-[300px] w-full">
        <Image
          className="object-contain rounded-lg"
          src={image}
          alt={""}
          fill
        />
      </div>
      <Text className="font-bold text-xl">{wine}</Text>
      <Text>
        {winery} 🌟{makeRate(rating.average)}
      </Text>
    </div>
  );
};

export default Wine;
