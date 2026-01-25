import GradientOrb from './GradientOrb';
import DotPattern from './DotPattern';
import GridPattern from './GridPattern';

const AnimatedBackground = ({ variant = 'default' }) => {
  const variants = {
    default: (
      <>
        <GradientOrb position="top-left" color="bright-teal" size="large" opacity={20} />
        <GradientOrb position="bottom-right" color="deep-teal" size="large" opacity={20} animate={false} />
        <DotPattern opacity={0.05} />
      </>
    ),
    hero: (
      <>
        <GradientOrb position="top-left" color="bright-teal" size="xlarge" opacity={25} />
        <GradientOrb position="bottom-right" color="deep-teal" size="large" opacity={20} />
        <DotPattern opacity={0.08} size="40px" />
      </>
    ),
    subtle: (
      <>
        <GradientOrb position="top-right" color="bright-teal" size="medium" opacity={15} />
        <GradientOrb position="bottom-left" color="deep-teal" size="medium" opacity={15} />
        <DotPattern opacity={0.03} />
      </>
    ),
    grid: (
      <>
        <GradientOrb position="center" color="bright-teal" size="xlarge" opacity={10} animate={false} />
        <GridPattern opacity={0.05} />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variants[variant]}
    </div>
  );
};

export default AnimatedBackground;