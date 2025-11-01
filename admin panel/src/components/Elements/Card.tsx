import { Link } from "react-router";

interface CardProps {
  cardStyle?: string;
  title: string;
  children: React.ReactNode;
  image: string;
  link?: string;
}

export const Card = (props: CardProps) => {
  const { children, title, cardStyle, image, link } = props;
  return (
    <Link to={link || "#"}>
      <div
        className={`flex flex-col w-xs h-50 rounded-xl px-3 py-6 gap-2 justify-center items-center mt-6 ${cardStyle} shadow-xl hover:scale-105 transition-transform pointer`}
      >
        <div className="flex justify-center items-center h-full">
          <img src={image} alt={title} className="w-20 h-20 object-contain" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <div>
          <p className="mt-2 font-semibold text-gray-600">{children}</p>
        </div>
      </div>
    </Link>
  );
};
