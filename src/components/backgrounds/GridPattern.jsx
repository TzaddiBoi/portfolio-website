const GridPattern = ({ className = '', size = '50px', opacity = 0.05 }) => {
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(12, 154, 144, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(12, 154, 144, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size} ${size}`,
      }}
    />
  );
};

export default GridPattern;