import Text from "../base/Text";

const Heading = ({ children, level = 6 }) => {
  const size = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-md",
  };

  return (
    <Text
      className={`text-[#3a466a] font-bold ${size[level]}`}
      Component={`h${level}`}
    >
      {children}
    </Text>
  );
};

export default Heading;
