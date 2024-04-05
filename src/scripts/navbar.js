import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > window.innerHeight * 0.2;
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      {/* Navbar content */}
    </nav>
  );
}
