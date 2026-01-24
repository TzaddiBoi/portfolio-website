import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-darkest-bg">
      <Navbar />
      <Hero />
      
      {/* Placeholder sections - we'll build these next */}
      <section id="services" className="py-24 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-white text-center">Services Section Coming Soon</h2>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-white text-center">Portfolio Section Coming Soon</h2>
        </div>
      </section>

      <section id="about" className="py-24 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-white text-center">About Section Coming Soon</h2>
        </div>
      </section>

      <section id="contact" className="py-24 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-white text-center">Contact Section Coming Soon</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;