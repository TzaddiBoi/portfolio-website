import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const Home = () => {
  // Add emoji to projects for display
  const projectsWithEmoji = projects.map((project) => ({
    ...project,
    emoji:
      project.title === 'Bearcechen POS System'
        ? '🏪'
        : project.title === 'IoT Automatic Water Pump'
        ? '💧'
        : project.title === 'Portfolio Website'
        ? '🌐'
        : '🌴',
  }));

  const featuredProjects = projectsWithEmoji.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-darkest-bg">
      {/* ✅ Add SEO component */}
      <SEO 
        title="Home"
        description="Professional engineering portfolio showcasing IoT solutions, application development, and prototyping projects. Building innovative technology solutions for startups and small businesses."
        keywords="IoT engineer, web developer, mobile apps, prototyping, technical consulting, engineering services"
        url="https://yourdomain.com"
      />
      {/* ✅ Add Structured Data component */}
      <StructuredData />


      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-darkest-bg relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="text-5xl font-bold text-white mb-4 font-poppins">
              WHAT WE <span className="text-bright-teal">DO?</span>
            </h2>
            <div className="w-24 h-1 bg-bright-teal"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-bright-teal text-white rounded-lg font-semibold hover:bg-deep-teal transition-all duration-500">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-24 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl font-bold text-white mb-4 font-poppins">
              FEATURED <span className="text-bright-teal">PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-bright-teal mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-bright-teal/50 transition-all duration-500 inline-flex items-center gap-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 bg-darkest-bg relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-9xl">🎓</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
                  About Us
                </span>
                <h2 className="text-5xl font-bold text-white mb-4 font-poppins">
                  WHO ARE <span className="text-bright-teal">WE?</span>
                </h2>
                <div className="w-24 h-1 bg-bright-teal mb-6"></div>
                <p className="text-light-gray leading-relaxed mb-6">
                  As a third-year engineering student, I've always been fascinated by how
                  technology can solve everyday problems. From automating mundane tasks to
                  creating systems that save time and resources, I thrive on turning ideas into
                  reality.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 font-poppins">Clean Code</h4>
                    <p className="text-light-gray text-sm">
                      Maintainable and efficient solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 font-poppins">Modern Design</h4>
                    <p className="text-light-gray text-sm">Contemporary user experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-5xl font-bold text-white mb-4 font-poppins">
              CLIENT <span className="text-bright-teal">FEEDBACK</span>
            </h2>
            <div className="w-24 h-1 bg-bright-teal mx-auto"></div>
            <p className="text-light-gray text-lg mt-4">What people say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '📦', value: '8+', label: 'Projects' },
              { icon: '⭐', value: '4.9', label: 'Rating' },
              { icon: '👥', value: '10+', label: 'Clients' },
              { icon: '⚡', value: '3', label: 'Years Exp' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-darker-bg border border-dark-gray rounded-2xl flex items-center justify-center group-hover:border-bright-teal transition-all duration-500">
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-bright-teal mb-2 tabular-nums font-poppins">
                  {stat.value}
                </div>
                <div className="text-light-gray text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-deep-teal via-bright-teal to-deep-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 font-poppins">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with innovative technology solutions
          </p>
          <button className="px-10 py-5 bg-white text-deep-teal rounded-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl">
            LET'S BUILD TOGETHER
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;