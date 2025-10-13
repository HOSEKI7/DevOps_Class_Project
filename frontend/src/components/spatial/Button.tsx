type ButtonProps = {
  children: string;
  type: "button" | "submit" | "reset";
  style?: string;
};

const Button = (props: ButtonProps) => {
  const { children, type, style } = props;

  return (
    <div>
      <button type={type} className={`mt-4 px-4 py-2 rounded ${style}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
