import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Add emoji to projects
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

  // Get unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    selectedCategory === 'All'
      ? projectsWithEmoji
      : projectsWithEmoji.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-darkest-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 font-poppins">
              MY <span className="text-bright-teal">PROJECTS</span>
            </h1>
            <div className="w-24 h-1 bg-bright-teal mx-auto mb-6"></div>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              Explore my portfolio of innovative solutions across IoT, application development,
              and prototyping
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-deep-teal to-bright-teal text-white shadow-lg shadow-bright-teal/50'
                    : 'bg-darker-bg text-light-gray border border-dark-gray hover:border-bright-teal hover:text-bright-teal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-light-gray">
              Showing <span className="text-bright-teal font-bold">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                No projects found
              </h3>
              <p className="text-light-gray">Try selecting a different category</p>
            </div>
          )}
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
            Have a Project in Mind?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
          <a
            href="/#contact"
            className="inline-block px-10 py-5 bg-white text-deep-teal rounded-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl"
          >
            START A PROJECT
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;