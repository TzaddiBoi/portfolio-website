import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

const navLinks = [
    { name: 'HOME', href: '/', route: '/' },
    { name: 'ABOUT', href: '/about', route: '/about' },
    { name: 'PORTFOLIO', href: '/portfolio', route: '/portfolio' },
    { name: 'CONTACT', href: '/contact', route: '/contact' },
];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-darkest-bg/95 backdrop-blur-lg border-b border-dark-gray shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="text-2xl font-bold font-poppins">
              <span className="text-white">TJAE_</span>
              <span className="text-bright-teal">TZAD</span>
            </div>
            <div className="text-bright-teal text-xs tracking-widest">ENGINEER</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
            if (link.href.startsWith('#')) {
                return (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative font-medium tracking-wide transition-all duration-300 text-light-gray hover:text-bright-teal group"
                >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-bright-teal transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </a>
                );
            }
            return (
                <Link
                key={link.name}
                to={link.href}
                className={`relative font-medium tracking-wide transition-all duration-300 group ${
                    location.pathname === link.href
                    ? 'text-bright-teal'
                    : 'text-light-gray hover:text-bright-teal'
                }`}
                >
                {link.name}
                <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-bright-teal transform origin-left transition-transform duration-300 ${
                    location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                ></span>
                </Link>
            );
            })}
            <button className="w-10 h-10 rounded-lg bg-darker-bg border border-dark-gray flex items-center justify-center text-bright-teal hover:bg-bright-teal hover:text-white transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-darker-bg border border-dark-gray flex items-center justify-center text-bright-teal"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-dark-gray">
            <div className="space-y-4">
              {navLinks.map((link) => {
                if (link.href.startsWith('#')) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block text-light-gray hover:text-bright-teal transition-colors uppercase font-medium"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-light-gray hover:text-bright-teal transition-colors uppercase font-medium"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;