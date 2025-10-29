type ButtonProps = {
  children: string;
  type: "button" | "submit" | "reset";
  style?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, type, style, onClick } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
