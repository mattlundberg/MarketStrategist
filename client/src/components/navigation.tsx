import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary">Emilie Lundberg</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-primary transition duration-300 font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition duration-300 font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300 font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300 font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300 font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300 font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block mx-3 my-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition duration-300 font-medium text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
