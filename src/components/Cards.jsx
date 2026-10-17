export const Cards = ({ img, title }) => {
  return (
    <div className="border-2 md:h-80 md:w-60 h-60 min-w-45 rounded-lg cursor-pointer hover:border-border-color/80 hover:shadow-lg hover:shadow-gray-600">
      <img
        src={img}
        alt={title}
        className="w-full h-full rounded-md border-none"
      />
      <div className="font-bold">{title}</div>
    </div>
  );
};
