const Button = ({ children, className }) => {
  return <button className={`${className} px-3 py-1`}>{children}</button>;
};

export default Button;
