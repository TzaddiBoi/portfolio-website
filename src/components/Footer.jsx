import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tzaddifatalla@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesFooter = ['IoT Solutions', 'App Development', 'Prototyping', 'Consulting'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darker-bg border-t border-dark-gray">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4 font-poppins">
              <span className="text-white">TZADDI</span>
              <span className="text-bright-teal">FATALLA</span>
            </div>
            <p className="text-light-gray text-sm leading-relaxed">
              Innovative engineer transforming ideas into functional solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm font-poppins">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-light-gray hover:text-bright-teal transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm font-poppins">
              Services
            </h4>
            <div className="space-y-2 text-light-gray text-sm">
              {servicesFooter.map((service) => (
                <div key={service}>{service}</div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm font-poppins">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-darkest-bg border border-dark-gray rounded-lg flex items-center justify-center text-bright-teal hover:bg-bright-teal hover:text-white hover:border-bright-teal transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-medium-gray text-sm">
            © {currentYear} Tzaddi Fatalla. All rights reserved.
          </div>
          <div className="text-medium-gray text-sm flex items-center gap-2">
            <span>DESIGN BY</span>
            <button onClick={scrollToTop} className="text-bright-teal font-bold hover:underline">
              TZADDIFATALLA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;