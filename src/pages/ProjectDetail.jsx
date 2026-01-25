import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, ArrowRight, ExternalLink, Check } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-darkest-bg">
       
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-bright-teal hover:underline">
            Back to Portfolio
          </Link>
        </div>
      
      </div>
    );
  }

  // Get emoji for project
  const emoji =
    project.title === 'Bearcechen POS System'
      ? '🏪'
      : project.title === 'IoT Automatic Water Pump'
      ? '💧'
      : project.title === 'Portfolio Website'
      ? '🌐'
      : '🌴';

  // Get previous and next projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-darkest-bg">
      {/* ✅ Add dynamic SEO component */}
      <SEO 
        title={project.title}
        description={project.description}
        keywords={`${project.tags.join(', ')}, ${project.category}, case study`}
        url={`https://yourdomain.com/portfolio/${project.id}`}
        type="article"
      />
     

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 text-light-gray hover:text-bright-teal transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Portfolio</span>
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4">
              {project.category}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              {project.title}
            </h1>
            <p className="text-light-gray text-xl leading-relaxed">{project.description}</p>
          </div>

          {/* Project Meta */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-darker-bg p-6 rounded-xl border border-dark-gray">
              <div className="text-medium-gray text-sm mb-2">Client</div>
              <div className="text-white font-semibold">{project.client}</div>
            </div>
            <div className="bg-darker-bg p-6 rounded-xl border border-dark-gray">
              <div className="text-medium-gray text-sm mb-2">Duration</div>
              <div className="text-white font-semibold">{project.duration}</div>
            </div>
            <div className="bg-darker-bg p-6 rounded-xl border border-dark-gray">
              <div className="text-medium-gray text-sm mb-2">Role</div>
              <div className="text-white font-semibold">{project.role}</div>
            </div>
            <div className="bg-darker-bg p-6 rounded-xl border border-dark-gray">
              <div className="text-medium-gray text-sm mb-2">Status</div>
              <div className="text-bright-teal font-semibold">{project.metrics}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
    <section className="py-16 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            {project.images && project.images.length > 0 ? (
            <div className="aspect-video rounded-2xl overflow-hidden border-4 border-bright-teal shadow-2xl shadow-bright-teal/30">
                <img 
                src={project.images[0]} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
                />
            </div>
            ) : (
            <div className="aspect-video bg-gradient-to-br from-deep-teal to-bright-teal rounded-2xl overflow-hidden border-4 border-bright-teal shadow-2xl shadow-bright-teal/30 flex items-center justify-center">
                <div className="text-9xl">{emoji}</div>
            </div>
            )}
        </div>
    </section>

      {/* Project Overview */}
      <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-6 font-poppins">Project Overview</h2>
          <p className="text-light-gray text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Tools Used */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-darker-bg text-bright-teal border border-deep-teal rounded-lg font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results */}
      <section className="py-16 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <div className="bg-darkest-bg p-8 rounded-2xl border border-dark-gray">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">The Challenge</h3>
              <p className="text-light-gray leading-relaxed">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-darkest-bg p-8 rounded-2xl border border-dark-gray">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">The Solution</h3>
              <p className="text-light-gray leading-relaxed">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="bg-darkest-bg p-8 rounded-2xl border border-dark-gray">
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">The Results</h3>
              <ul className="space-y-3">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-gray">
                    <Check className="w-5 h-5 text-bright-teal mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    {/* Image Gallery */}
    {project.images && project.images.length > 1 && (
    <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-8 font-poppins">Project Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.slice(1).map((image, i) => (
            <div
                key={i}
                className="aspect-video rounded-xl overflow-hidden border-2 border-dark-gray hover:border-bright-teal transition-all duration-300 cursor-pointer group"
            >
                <img 
                src={image} 
                alt={`${project.title} - Screenshot ${i + 2}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            ))}
        </div>
        </div>
    </section>
    )}

      {/* Tags */}
      <section className="py-16 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h3 className="text-xl font-bold text-white mb-6 font-poppins">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-darkest-bg text-light-gray border border-dark-gray rounded-lg hover:border-bright-teal hover:text-bright-teal transition-all duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-darkest-bg border-t border-dark-gray">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.id}`}
                className="group flex items-center gap-3 text-light-gray hover:text-bright-teal transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <div>
                  <div className="text-sm mb-1">Previous Project</div>
                  <div className="font-semibold">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextProject ? (
              <Link
                to={`/portfolio/${nextProject.id}`}
                className="group flex items-center gap-3 text-light-gray hover:text-bright-teal transition-colors text-right"
              >
                <div>
                  <div className="text-sm mb-1">Next Project</div>
                  <div className="font-semibold">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-darker-bg">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
              Related <span className="text-bright-teal">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relProject) => {
                const relEmoji =
                  relProject.title === 'Bearcechen POS System'
                    ? '🏪'
                    : relProject.title === 'IoT Automatic Water Pump'
                    ? '💧'
                    : relProject.title === 'Portfolio Website'
                    ? '🌐'
                    : '🌴';
                
                return (
                  <Link
                    key={relProject.id}
                    to={`/portfolio/${relProject.id}`}
                    className="group bg-darkest-bg rounded-xl border border-dark-gray hover:border-bright-teal transition-all duration-500 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-deep-teal to-bright-teal flex items-center justify-center">
                      <div className="text-7xl">{relEmoji}</div>
                    </div>
                    <div className="p-6">
                      <div className="text-bright-teal text-sm mb-2">{relProject.category}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-bright-teal transition-colors">
                        {relProject.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-deep-teal via-bright-teal to-deep-teal">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Interested in Working Together?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your business
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-white text-deep-teal rounded-lg font-bold hover:bg-gray-100 transition-all duration-500"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default ProjectDetail;