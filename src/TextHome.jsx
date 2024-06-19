import React, { useEffect, useRef } from 'react';

const TextHome = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    // Ensure Typed.js is available globally
    const Typed = window.Typed;

    const options = {
      strings: ['write','create', 'share', 'invest',' grow'],
      typeSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js on the referenced element
    const typed = new Typed(typedElement.current, options);

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='txtmain'>
      <span id="typed" ref={typedElement} />
    </div>
  );
};

export default TextHome;
