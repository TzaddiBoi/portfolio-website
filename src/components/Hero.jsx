import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-darkest-bg">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bright-teal/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-teal/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-bright-teal text-sm font-bold uppercase tracking-widest">
                Innovative Engineer
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-poppins">
              WE ARE <span className="text-bright-teal">CREATIVE</span>
              <br />
              ENGINEERS
            </h1>

            <p className="text-light-gray text-lg leading-relaxed max-w-xl">
              Transforming ideas into functional solutions through IoT, application development,
              and prototyping. Helping startups and small businesses innovate with cutting-edge
              technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="group px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-bright-teal/50 transition-all duration-500 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 border-2 border-bright-teal text-bright-teal rounded-lg font-semibold hover:bg-bright-teal hover:text-white transition-all duration-500"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-bright-teal mb-2 font-poppins">4+</div>
                <div className="text-light-gray text-sm">Services</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bright-teal mb-2 font-poppins">8+</div>
                <div className="text-light-gray text-sm">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bright-teal mb-2 font-poppins">3</div>
                <div className="text-light-gray text-sm">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border-4 border-bright-teal shadow-2xl shadow-bright-teal/30">
              <div className="absolute inset-0 bg-gradient-to-br from-bright-teal to-deep-teal flex items-center justify-center">
                <div className="text-9xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;