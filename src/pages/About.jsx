import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Star, ArrowRight, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-darkest-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              About
            </span>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 font-poppins">
              MY <span className="text-bright-teal">JOURNEY</span>
            </h1>
            <div className="w-24 h-1 bg-bright-teal mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
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

            {/* Profile Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-deep-teal to-bright-teal rounded-3xl overflow-hidden border-4 border-bright-teal shadow-2xl shadow-bright-teal/30">
                  {/* Replace this div with your actual image when ready */}
                  <div className="absolute inset-0 flex items-center justify-center text-9xl">
                    👨‍💻
                  </div>
                  {/* When you have your photo, use this instead:
                  <img 
                    src="/src/assets/images/profile.jpg" 
                    alt="John Smith" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { label: 'Years Experience', value: '3+', icon: '⏱️' },
              { label: 'Projects Completed', value: '8+', icon: '📦' },
              { label: 'Happy Clients', value: '10+', icon: '😊' },
              { label: 'Technologies', value: '15+', icon: '💻' },
            ].map((fact, index) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center font-poppins">
              Skills & <span className="text-bright-teal">Expertise</span>
            </h2>
            <p className="text-light-gray text-center mb-12 max-w-2xl mx-auto">
              A comprehensive set of technical skills acquired through hands-on projects and
              continuous learning
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Programming */}
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

              {/* Hardware & IoT */}
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

              {/* Tools & Platforms */}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;