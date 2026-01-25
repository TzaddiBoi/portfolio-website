import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopHook from './components/ScrollToTopHook';
import PageTransition from './components/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';

// Separate component to use useLocation hook
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } 
            />
            <Route 
              path="/about" 
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <PageTransition>
                  <Portfolio />
                </PageTransition>
              } 
            />
            <Route 
              path="/portfolio/:id" 
              element={
                <PageTransition>
                  <ProjectDetail />
                </PageTransition>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } 
            />
            <Route 
              path="*" 
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              } 
            />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;