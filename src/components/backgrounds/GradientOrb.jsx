const GradientOrb = ({ 
  position = 'top-left', 
  color = 'bright-teal', 
  size = 'large',
  blur = '3xl',
  opacity = 20,
  animate = true 
}) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  };

  const sizes = {
    small: 'w-[300px] h-[300px]',
    medium: 'w-[400px] h-[400px]',
    large: 'w-[600px] h-[600px]',
    xlarge: 'w-[800px] h-[800px]',
  };

  const colors = {
    'bright-teal': 'bg-bright-teal',
    'deep-teal': 'bg-deep-teal',
    'blue': 'bg-blue-500',
    'purple': 'bg-purple-500',
  };

  const blurs = {
    'xl': 'blur-xl',
    '2xl': 'blur-2xl',
    '3xl': 'blur-3xl',
  };

  return (
    <div 
      className={`absolute ${positions[position]} ${sizes[size]} ${colors[color]}/${opacity} rounded-full mix-blend-multiply filter ${blurs[blur]} ${animate ? 'animate-blob' : ''}`}
    />
  );
};

export default GradientOrb;