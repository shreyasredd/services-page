
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-finx-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-finx-primary font-roboto">
            Let's Build the Future Together
          </h2>
          <p className="text-lg mb-8 font-inter text-gray-700">
            Finxbridge is your end-to-end technology partner. Whether you need advisory, 
            development, integration, or support, we're here to make it happen.
          </p>
          <Button 
            className="bg-finx-accent hover:bg-finx-accent/90 text-finx-primary font-bold px-8 py-6 text-lg"
          >
            Contact Us Today →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
