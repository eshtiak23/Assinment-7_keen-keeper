import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">KeenKeeper</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 text-2xl mb-8">
          <a href="#" className="bg-white text-slate-900 p-4 rounded-full"><FaInstagram /></a>
          <a href="#" className="bg-white text-slate-900 p-4 rounded-full"><FaFacebookF /></a>
          <a href="#" className="bg-white text-slate-900 p-4 rounded-full"><FaXTwitter /></a>
        </div>

        <div className="border-t border-green-900 pt-6 flex flex-col md:flex-row justify-between gap-4 text-slate-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;