import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-base-content py-16 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
        {/* Logo + tagline */}
        <div className="gap-3 flex flex-col justify-center items-center">
          <div className="flex items-end ">
            <img src={logo} alt="logo icon" />
            <p className="font-bold text-3xl text-white -mb-1 -ml-3">
              ZapShift
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-sm opacity-90 text-base-content leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Divider */}
        <div className="border-y py-10 border-dashed border-[#03464D] w-full">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center text-base-content  gap-8 text-sm font-medium">
            <li className="hover:text-primary  cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Coverage
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0A66C290] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:scale-110 transition"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 transition"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
