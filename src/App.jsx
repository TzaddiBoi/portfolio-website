function App() {
  return (
    <div className="min-h-screen bg-darkest-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hello <span className="text-bright-teal">Portfolio!</span>
        </h1>
        <p className="text-light-gray text-xl">
          Your development environment is ready! 
        </p>
        <div className="mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-bright-teal/50 transition-all duration-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;