import { useEffect, useState } from "react";
import { getTimelineData } from "../utils/localStorage";
import { FaPhone, FaMessage, FaVideo } from "react-icons/fa6";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTimeline = getTimelineData();
    setTimeline(savedTimeline);
  }, []);

  const getIcon = (type) => {
    if (type === "Call") {
      return <FaPhone className="text-green-400 text-2xl" />;
    }

    if (type === "Text") {
      return <FaMessage className="text-blue-400 text-2xl" />;
    }

    return <FaVideo className="text-purple-400 text-2xl" />;
  };

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Timeline</h1>

      <div className="mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-800 text-white border border-slate-600 rounded-lg px-4 py-3"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-5">
        {filteredTimeline.length === 0 ? (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center text-slate-400">
            No timeline entries yet.
          </div>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center gap-4"
            >
              <div>{getIcon(item.type)}</div>

              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-400">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;