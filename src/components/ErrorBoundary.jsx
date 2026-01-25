import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-darkest-bg flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <div className="text-9xl mb-6">⚠️</div>
            <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
              Oops! Something went wrong
            </h1>
            <p className="text-light-gray mb-8 text-lg">
              We're sorry for the inconvenience. Please try refreshing the page or go back to the homepage.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-bright-teal/50 transition-all duration-500"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-bright-teal text-bright-teal rounded-lg font-semibold hover:bg-bright-teal hover:text-white transition-all duration-500"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;