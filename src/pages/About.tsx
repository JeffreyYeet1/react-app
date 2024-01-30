import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the component mounts or the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <h1>About</h1>
  );
};

