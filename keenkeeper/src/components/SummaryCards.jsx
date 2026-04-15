const SummaryCards = ({ friends }) => {
  const total = friends.length;
  const overdue = friends.filter((f) => f.status === "overdue").length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = overdue;
  const interactions = 12;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
      <div className="bg-slate-800 p-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-white">{total}</h2>
        <p className="text-slate-400">Total Friends</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-white">{onTrack}</h2>
        <p className="text-slate-400">On Track</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-white">{needAttention}</h2>
        <p className="text-slate-400">Need Attention</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-white">{interactions }</h2>
        <p className="text-slate-400">Interactions This Month</p>
      </div>
    </div>
  );
};

export default SummaryCards;