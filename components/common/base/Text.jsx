const Text = ({ children, className = "", Component = "span" }) => {
  return <Component className={`${className}`}>{children}</Component>;
};

export default Text;
