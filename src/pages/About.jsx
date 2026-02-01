import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { ChevronRight, Star, ArrowRight, Download, Scroll } from 'lucide-react';
import InteractiveGradient from '../components/backgrounds/InteractiveGradient';
import ParallaxBackground from '../components/backgrounds/ParallaxBackground';
import FloatingElements from '../components/backgrounds/FloatingElements';
import AnimatedBackground from '../components/backgrounds/AnimatedBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-darkest-bg">
      {/* ✅ Add SEO component */}
      <SEO 
        title="About Me"
        description="Learn about Tzaddi Fatalla, an innovative third-year engineering student specializing in IoT, application development, and prototyping. Discover my journey, skills, and achievements."
        keywords="engineering student, IoT specialist, developer portfolio, technical skills, certifications, awards"
        url="https://engrtjaetzad.online/about"
      />
    

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkest-bg relative overflow-hidden">
        <InteractiveGradient variant="hero" />
        <FloatingElements variant="circles" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              About
            </span>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 font-poppins">
              MY <span className="text-bright-teal">JOURNEY</span>
            </h1>
            <div className="w-24 h-1 bg-bright-teal mx-auto"></div>
          </div>
          </ScrollReveal>
        </div>
        
      </section>

      {/* Story Section */}
      <section className="py-16 bg-darkest-bg relative overflow-hidden">
        <ParallaxBackground speed={0.2}>
          <AnimatedBackground variant="subtle" />
        </ParallaxBackground>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <ScrollReveal delay={0}>
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-light-gray text-lg leading-relaxed">
                <h2 className="text-3xl font-bold text-white mb-6 font-poppins">My Story</h2>
                
                <p>
                  As a third-year engineering student, I've always been fascinated by how
                  technology can solve everyday problems. From automating mundane tasks to
                  creating systems that save time and resources, I thrive on turning ideas into
                  reality.
                </p>

                <p>
                  My journey began with tinkering with electronics and coding during high school.
                  Over the years, I've honed my skills in IoT, application development, and
                  prototyping. Key milestones include building an IoT-based water pump system and
                  developing an offline POS system for a local retail store.
                </p>

                <p>
                  I specialize in designing and implementing solutions tailored to the needs of
                  startups and small businesses. My approach involves understanding the problem
                  deeply, brainstorming creative solutions, and iterating until perfection.
                  Whether it's integrating sensors into smart devices or developing intuitive
                  apps, I ensure every solution is both functional and user-friendly.
                </p>

                <p className="text-bright-teal font-semibold">
                  Through my work, I've helped clients reduce costs, improve efficiency, and
                  innovate. Looking ahead, I aim to continue pushing boundaries in technology
                  while making a meaningful impact on the world around me.
                </p>
              </div>
            </div>
            </ScrollReveal>

            {/* Profile Image */}
            <ScrollReveal delay={0.2}>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-deep-teal to-bright-teal rounded-3xl overflow-hidden border-4 border-bright-teal shadow-2xl shadow-bright-teal/30">
                  {/* Replace this div with your actual image when ready */}
                  {//When you have your photo, use this instead:
                  <img 
                    src="/images/profile.jpg" 
                    alt="Tzaddi Fatalla" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  }
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-darker-bg relative overflow-hidden">
        <InteractiveGradient variant="subtle" />
        <FloatingElements variant="dots" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              //need to change these later to actual facts
              { label: 'Years Experience', value: '3+', icon: '⏱️' },
              { label: 'Projects Completed', value: '8+', icon: '📦' },
              { label: 'Happy Clients', value: '10+', icon: '😊' },
              { label: 'Technologies', value: '15+', icon: '💻' },
            ].map((fact, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
              <div
                key={index}
                className="bg-darkest-bg p-6 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500 text-center group"
              >
                <div className="text-5xl mb-4">{fact.icon}</div>
                <div className="text-4xl font-bold text-bright-teal mb-2 font-poppins">
                  {fact.value}
                </div>
                <div className="text-light-gray text-sm">{fact.label}</div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 bg-darkest-bg relative overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-8 text-center font-poppins">
              Skills & <span className="text-bright-teal">Expertise</span>
            </h2>
            <p className="text-light-gray text-center mb-12 max-w-2xl mx-auto">
              A comprehensive set of technical skills acquired through hands-on projects and
              continuous learning
            </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Programming */}
              <ScrollReveal delay={0}>
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Programming</h3>
                </div>
                <ul className="space-y-3">
                  {['Python', 'C/C++', 'JavaScript', 'React', 'Node.js', 'SQL'].map(
                    (skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-light-gray">
                        <div className="w-2 h-2 bg-bright-teal rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              </ScrollReveal>

              {/* Hardware & IoT */}
              <ScrollReveal delay={0.15}>
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Hardware & IoT</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Arduino',
                    'IoT Sensors',
                    'Circuit Design',
                    'Raspberry Pi',
                    '3D Printing',
                    'Embedded Systems',
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-light-gray">
                      <div className="w-2 h-2 bg-bright-teal rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>

              {/* Tools & Platforms */}
              <ScrollReveal delay={0.3}>
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    Tools & Platforms
                  </h3>
                </div>
                <ul className="space-y-3">
                  {['Git & GitHub', 'VS Code', 'CAD Software', 'Figma', 'SQLite', 'Tkinter'].map(
                    (skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-light-gray">
                        <div className="w-2 h-2 bg-bright-teal rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-darker-bg relative overflow-hidden">
       <InteractiveGradient variant="default" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-8 text-center font-poppins">
              How I <span className="text-bright-teal">Work</span>
            </h2>
            <p className="text-light-gray text-center mb-12 max-w-2xl mx-auto">
              A systematic approach to turning ideas into reality
            </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Understanding your needs, goals, and challenges through detailed consultation',
                  icon: '🔍',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Creating a comprehensive roadmap with timelines, milestones, and deliverables',
                  icon: '📋',
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Building the solution with iterative development and regular updates',
                  icon: '⚡',
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description: 'Testing, refining, and deploying the final product with full documentation',
                  icon: '🚀',
                },
              ].map((process, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  key={index}
                  className="relative bg-darkest-bg p-6 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500 group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {process.step}
                  </div>

                  <div className="text-5xl mb-4 mt-4">{process.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                    {process.title}
                  </h3>
                  <p className="text-light-gray text-sm leading-relaxed">{process.description}</p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-darkest-bg relative overflow-hidden">
        <ParallaxBackground speed={0.3}>
          <AnimatedBackground variant="elegant" />
        </ParallaxBackground>
        <FloatingElements variant="dots" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-12 text-center font-poppins">
              Credentials & <span className="text-bright-teal">Achievements</span>
            </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Certifications */}
              <ScrollReveal delay={0}>
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">Certifications</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      name: 'Certified Python Programmer',
                      issuer: 'Coursera',
                      year: '2024',
                    },
                    {
                      name: 'AutoCAD Essentials Certificate',
                      issuer: 'Professional Certification',
                      year: '2023',
                    },
                    {
                      name: 'Introduction to IoT',
                      issuer: 'edX',
                      year: '2023',
                    },
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-darkest-bg rounded-lg">
                      <ChevronRight className="w-5 h-5 text-bright-teal mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold">{cert.name}</div>
                        <div className="text-light-gray text-sm">{cert.issuer}</div>
                        <div className="text-bright-teal text-xs mt-1">{cert.year}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>

              {/* Awards */}
              <ScrollReveal delay={0.15}>
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    Awards & Recognition
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Dean's Lister",
                      detail: '3 Consecutive Semesters',
                      year: '2023-2024',
                    },
                    {
                      name: 'Hackathon Finalist',
                      detail: '2nd Place',
                      year: '2024',
                    },
                    {
                      name: 'Best Engineering Project',
                      detail: 'Water Pump System',
                      year: '2024',
                    },
                  ].map((award, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-darkest-bg rounded-lg">
                      <Star className="w-5 h-5 text-bright-teal mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold">{award.name}</div>
                        <div className="text-light-gray text-sm">{award.detail}</div>
                        <div className="text-bright-teal text-xs mt-1">{award.year}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
            </div>

            {/* Notable Clients/Projects */}
            <ScrollReveal delay={0.2}>
            <div className="mt-8 bg-darker-bg p-8 rounded-2xl border border-dark-gray">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Notable Clients & <span className="text-bright-teal">Partnerships</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Local Retail Store',
                    project: 'POS System Deployment',
                    icon: '🏪',
                  },
                  {
                    name: 'XYZ University',
                    project: 'Senior Design Sponsorship',
                    icon: '🎓',
                  },
                  {
                    name: 'Tech Startups',
                    project: 'IoT Consulting',
                    icon: '🚀',
                  },
                ].map((client, i) => (
                  <div
                    key={i}
                    className="p-6 bg-darkest-bg rounded-xl border border-dark-gray hover:border-bright-teal transition-all duration-500 text-center group"
                  >
                    <div className="text-4xl mb-3">{client.icon}</div>
                    <div className="text-white font-semibold mb-1">{client.name}</div>
                    <div className="text-light-gray text-sm">{client.project}</div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="py-16 bg-darker-bg relative overflow-hidden">
        <AnimatedBackground variant="subtle" />
        <ScrollReveal>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-deep-teal to-bright-teal p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
              Want to Know More?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Download my complete resume with detailed project information and experience
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-deep-teal rounded-lg font-bold hover:bg-gray-100 transition-all duration-500 inline-flex items-center gap-2 shadow-xl">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-deep-teal transition-all duration-500 inline-flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

     
    </div>
  );
};

export default About;