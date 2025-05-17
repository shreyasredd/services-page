import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  colorClass: string;
  iconBgClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  highlights,
  colorClass,
  iconBgClass
}) => {
  return (
    <div className="h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${iconBgClass}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-2 h-2 mt-2 mr-2 rounded-full ${colorClass}`} />
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
