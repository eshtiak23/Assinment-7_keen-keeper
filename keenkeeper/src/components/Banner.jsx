const Banner = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Friends to keep close in your life
      </h1>

      <p className="text-slate-400 max-w-2xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend,
        and nurture the relationships that matter most.
      </p>

      <button className="bg-green-800 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition">
        + Add a Friend
      </button>
    </div>
  );
};

export default Banner;