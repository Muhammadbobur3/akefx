import { getDefaultPlaceholder } from "../utils/default-placeholder";

function TestimonialCard(props) {
  const { text, author, image } = props;

  return (
    <div className="bg-[#232323] rounded-lg shadow-lg p-6">
      <p className="text-lg text-gray-400 font-medium mb-4">{text}</p>
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4 object-cover"
          src={image || getDefaultPlaceholder(author)}
          alt={author}
        />
        <div>
          <p className="text-white font-medium text-xl">{author}</p>
          <p className="text-gray-200 text-sm">Trader</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
