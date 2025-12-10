import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 h-full text-white py-10 mt-5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-center md:text-start">Sohail Shaikh</h2>
          <p className="text-gray-400 text-sm leading-6">
            MERN Stack Developer passionate about building clean, modern, and scalable web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-around md:justify-between md:gap-5">
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/project" className="hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Connect</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>


      </div>

      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sohail Shaikh. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;

