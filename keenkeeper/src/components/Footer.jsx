const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">

      
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

         
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-purple-400">
              Keen <span className="text-green-400">Keeper</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Stay connected. Build stronger relationships.
            </p>
          </div>

          {/* Links Section */}

          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a href="/" className="text-slate-400 hover:text-white transition">
              Home
            </a>
            <a href="/timeline" className="text-slate-400 hover:text-white transition">
              Timeline
            </a>
            <a href="/stats" className="text-slate-400 hover:text-white transition">
              Stats
            </a>
          </div>
        </div>

      
        <div className="border-t border-slate-800 my-6"></div>

        <div className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;