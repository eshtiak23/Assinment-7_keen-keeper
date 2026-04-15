import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  const getStatusStyle = () => {
    if (status === "overdue") {
      return "bg-red-500 text-white";
    }

    if (status === "almost due") {
      return "bg-yellow-500 text-white";
    }

    return "bg-green-700 text-white";
  };

  return (
    <Link to={`/friend/${id}`}>
      <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-[1.02] transition border border-slate-700">
        <img
          src={picture}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />

        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>

        <p className="text-slate-400 mb-3">{days_since_contact}d ago</p>

        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle()}`}>
          {status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;