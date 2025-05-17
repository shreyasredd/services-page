
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-finx-primary to-finx-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-roboto">Solutions & Services</h1>
          <p className="text-xl md:text-2xl mb-8 font-inter font-light">
            Accelerate Digital Transformation with Finxbridge
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Finxbridge delivers innovative, secure, and scalable technology solutions 
            tailored to modern business needs in our digital-first world.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
