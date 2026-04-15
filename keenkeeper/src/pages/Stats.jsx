import { useEffect, useState } from "react";
import { getTimelineData } from "../utils/localStorage";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timeline = getTimelineData();

    const callCount = timeline.filter((item) => item.type === "Call").length;
    const textCount = timeline.filter((item) => item.type === "Text").length;
    const videoCount = timeline.filter((item) => item.type === "Video").length;

    const data = [
      { name: "Call", value: callCount },
      { name: "Text", value: textCount },
      { name: "Video", value: videoCount },
    ];

    setChartData(data);
  }, []);

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
          Interaction Overview
        </h2>

        {chartData.every((item) => item.value === 0) ? (
          <div className="text-center text-slate-400 py-16 text-lg">
            No interaction data available yet.
          </div>
        ) : (
          <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;