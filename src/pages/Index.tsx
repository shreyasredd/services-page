
import React, { useState } from 'react';
import Header from '@/components/Header';
import ServicesGrid from '@/components/ServicesGrid';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
// import ServiceFilter from '@/components/ServiceFilter';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-finx-primary font-roboto">
                Explore our capabilities
              </h2>
              <p className="text-lg text-gray-600 font-inter">
                Learn how we help you lead in a digital-first world with our comprehensive solutions.
              </p>
            </div>
            
            {/* <ServiceFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> */}
            
            <ServicesGrid />
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
