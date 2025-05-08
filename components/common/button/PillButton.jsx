import Button from "../base/Button";

const PillButton = ({ children, className }) => {
  return <Button className={`rounded-2xl ${className}`}>{children}</Button>;
};

export default PillButton;
