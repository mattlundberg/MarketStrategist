import { SiInstagram, SiLinkedin, SiFacebook, SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Emilie Lundberg</h3>
            <p className="text-white/80 leading-relaxed">
              Strategic social media marketing that transforms followers into loyal customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition duration-300">
                <SiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition duration-300">
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition duration-300">
                <SiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition duration-300">
                <SiTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition duration-300">Instagram Marketing</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Facebook Strategy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">TikTok Growth</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Pinterest Marketing</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Email Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition duration-300">Strategy Guide</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>hello@emilielundberg.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon-Fri 9AM-6PM EST</li>
              <li>
                <a href="#contact" className="inline-block mt-2 bg-accent px-4 py-2 rounded-full text-sm hover:bg-accent/90 transition duration-300">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Emilie Lundberg. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
