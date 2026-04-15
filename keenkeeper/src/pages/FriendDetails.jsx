import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPhone, FaMessage, FaVideo, FaBoxArchive, FaTrash } from "react-icons/fa6";
import { LuAlarmClockCheck } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { getTimelineData, saveTimelineData } from "../utils/localStorage";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const foundFriend = data.find((item) => item.id === Number(id));
        setFriend(foundFriend);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load friend details:", error);
        setLoading(false);
      });
  }, [id]);

  const getStatusStyle = (status) => {
    if (status === "overdue") {
      return "bg-red-500 text-white";
    }

    if (status === "almost due") {
      return "bg-yellow-500 text-white";
    }

    return "bg-green-700 text-white";
  };

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
    };

    const oldTimeline = getTimelineData();
    const updatedTimeline = [newEntry, ...oldTimeline];

    saveTimelineData(updatedTimeline);
    toast.success(`${type} added to timeline`);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-300 text-xl">
        Loading friend details...
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-red-400 text-xl">
        Friend not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="space-y-4">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
          />

          <h2 className="text-3xl font-bold text-white mb-3">{friend.name}</h2>

          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(friend.status)}`}>
            {friend.status}
          </span>

          <div className="flex flex-wrap justify-center gap-2 my-4">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-300 italic mb-3">"{friend.bio}"</p>
          <p className="text-slate-400">{friend.email}</p>
        </div>

        <button className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
          <LuAlarmClockCheck />
          Snooze 2 Weeks
        </button>

        <button className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-slate-700 transition">
          <FaBoxArchive />
          Archive
        </button>

        <button className="w-full bg-slate-800 border border-red-500 text-red-400 rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition">
          <FaTrash />
          Delete
        </button>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400 mb-2">{friend.days_since_contact}</h3>
            <p className="text-slate-400">Days Since Contact</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400 mb-2">{friend.goal}</h3>
            <p className="text-slate-400">Goal (Days)</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{friend.next_due_date}</h3>
            <p className="text-slate-400">Next Due</p>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-semibold text-green-400 mb-3">Relationship Goal</h3>
            <p className="text-slate-300 text-xl">
              Connect every <span className="font-bold text-white">{friend.goal} days</span>
            </p>
          </div>

          <button className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg">
            Edit
          </button>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">Quick Check-In</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleCheckIn("Call")}
              className="bg-slate-900 border border-slate-700 rounded-xl py-8 text-white flex flex-col items-center gap-3 hover:bg-slate-700 transition"
            >
              <FaPhone className="text-3xl" />
              <span className="text-xl">Call</span>
            </button>

            <button
              onClick={() => handleCheckIn("Text")}
              className="bg-slate-900 border border-slate-700 rounded-xl py-8 text-white flex flex-col items-center gap-3 hover:bg-slate-700 transition"
            >
              <FaMessage className="text-3xl" />
              <span className="text-xl">Text</span>
            </button>

            <button
              onClick={() => handleCheckIn("Video")}
              className="bg-slate-900 border border-slate-700 rounded-xl py-8 text-white flex flex-col items-center gap-3 hover:bg-slate-700 transition"
            >
              <FaVideo className="text-3xl" />
              <span className="text-xl">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;