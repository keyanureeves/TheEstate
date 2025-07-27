import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#D8C0B0] text-[#2B1B12] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold">Dwelle</h2>
          <p className="mt-2 text-sm">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Our Team</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="font-semibold mb-2">Find Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Events</li>
            <li>Locations</li>
            <li>Newsletter</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-2">Our Social</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaFacebookF /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaXTwitter /> Twitter (X)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
