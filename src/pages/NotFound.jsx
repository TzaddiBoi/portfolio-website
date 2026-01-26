import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-darkest-bg">
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        url="https://engrtjaetzad.online/404"
      />
      
     
      
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-2xl">
          <div className="text-9xl mb-6">🔍</div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 font-poppins">
            4<span className="text-bright-teal">0</span>4
          </h1>
          <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
            Page Not Found
          </h2>
          <p className="text-light-gray mb-8 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-bright-teal/50 transition-all duration-500"
            >
              Go to Homepage
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-bright-teal text-bright-teal rounded-lg font-semibold hover:bg-bright-teal hover:text-white transition-all duration-500"
            >
              View Portfolio
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray">
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <Link to="/" className="text-light-gray hover:text-bright-teal transition-colors">
                → Home
              </Link>
              <Link to="/about" className="text-light-gray hover:text-bright-teal transition-colors">
                → About
              </Link>
              <Link to="/portfolio" className="text-light-gray hover:text-bright-teal transition-colors">
                → Portfolio
              </Link>
              <Link to="/contact" className="text-light-gray hover:text-bright-teal transition-colors">
                → Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
      
 
    </div>
  );
};

export default NotFound;