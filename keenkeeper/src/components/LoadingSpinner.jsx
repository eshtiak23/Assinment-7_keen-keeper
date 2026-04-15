const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-slate-700 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-300 text-lg">Loading friends...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;