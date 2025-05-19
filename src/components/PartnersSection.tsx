import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Partner 1',
      logo: '/partners/partner1.png',
    },
    {
      name: 'Partner 2',
      logo: '/partners/partner2.png',
    },
    {
      name: 'Partner 3',
      logo: '/partners/partner3.png',
    },
    {
      name: 'Partner 4',
      logo: '/partners/partner4.png',
    },
    {
      name: 'Partner 5',
      logo: '/partners/partner5.png',
    },
    {
      name: 'Partner 6',
      logo: '/partners/partner6.png',
    },
  ];

  // Duplicate partners array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#144F5D' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Our Trusted Partners
          </h2>
          <p className="text-lg font-inter" style={{ color: '#76A4B1' }}>
            We're proud to collaborate with industry leaders who share our vision for innovation and excellence.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="max-w-[900px] mx-auto">
            <div 
              className="flex"
              style={{
                width: 'fit-content',
                animation: 'scroll 30s linear infinite',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="w-[280px] h-36 flex items-center justify-center p-5 bg-white/10 backdrop-blur-sm mx-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-[200px] max-h-[90px] object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default PartnersSection; 