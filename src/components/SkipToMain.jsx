const SkipToMain = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-bright-teal focus:text-white focus:rounded-lg focus:shadow-xl"
    >
      Skip to main content
    </a>
  );
};

export default SkipToMain;