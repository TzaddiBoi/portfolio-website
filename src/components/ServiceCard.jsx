import { Cpu, Code, Box, Users } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Code: Code,
  Box: Box,
  Users: Users,
};

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon] || Cpu;

  return (
    <div className="group relative bg-darker-bg p-8 rounded-2xl border border-dark-gray hover:border-bright-teal transition-all duration-500 hover:shadow-xl hover:shadow-bright-teal/10 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-bright-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 font-poppins">{title}</h3>
        <p className="text-light-gray leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;