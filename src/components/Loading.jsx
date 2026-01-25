const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-darkest-bg flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-dark-gray rounded-full"></div>
          <div className="absolute inset-0 border-4 border-bright-teal border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-light-gray text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;