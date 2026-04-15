import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-green-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;