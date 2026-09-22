import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 container mx-auto mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Book Vibe</h2>
            <p className="text-sm text-gray-500 mt-1">
              Read simple and learn something new thing.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <a href="#" className="hover:text-gray-900 transition">
              About
            </a>
            <a href="#" className="hover:text-gray-900 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Book Vibe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
