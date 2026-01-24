import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-darker-bg rounded-2xl border border-dark-gray overflow-hidden hover:border-bright-teal transition-all duration-500 hover:shadow-2xl hover:shadow-bright-teal/20 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-bright-teal/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Image Area */}
      <div className="relative h-64 bg-gradient-to-br from-deep-teal to-bright-teal flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-700">
          {project.emoji || '📦'}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-bright-teal text-white text-xs font-bold rounded-full">
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="text-bright-teal text-sm font-semibold mb-2 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bright-teal transition-colors duration-300 font-poppins">
          {project.title}
        </h3>
        <p className="text-light-gray mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-deep-teal/20 text-bright-teal text-xs rounded-lg border border-deep-teal/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-gray">
          <span className="text-bright-teal font-bold text-sm">{project.metrics}</span>
          <Link
            to={`/portfolio/${project.id}`}
            className="text-bright-teal hover:text-white transition-colors duration-300 flex items-center gap-2 group/btn"
          >
            <span className="font-semibold">View Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;