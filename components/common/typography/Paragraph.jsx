import Text from "../base/Text";

const Paragraph = ({ children, className = "" }) => {
  return (
    <Text className={`text-md text-gray-700 ${className}`} Component="p">
      {children}
    </Text>
  );
};

export default Paragraph;
