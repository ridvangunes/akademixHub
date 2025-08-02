import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white mb-4">AkademixHub</h4>
          <p className="text-sm">
            Your future starts here. Learn from the best, at your own pace.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Subscribe</h4>
          <form className="flex flex-col gap-2">
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              className="bg-gray-800 text-white border-gray-600 placeholder:text-gray-400"
              required
            />
            <Button
              type="submit"
              className="bg-orange-500 text-white font-semibold hover:bg-orange-500 transition shadow"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 AkademixHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
