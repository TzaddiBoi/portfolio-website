import ReactGA from 'react-ga4';

// Replace with your actual Measurement ID from Google Analytics
const TRACKING_ID = 'G-ZNZCMWMWK6';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
}

export const logPageView = () => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: window.location.pathname + window.location.search 
  });
};

export const logEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};

export const logFormSubmit = (formName) => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: formName,
  });
};

