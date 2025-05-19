import React, { useState, useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Rocket, Handshake, Wrench, Lightbulb, Layers, Database, Plug, Cloud, Link, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Organize services into categories
const serviceCategories = {
  "All": ["innovation", "partnerships", "implementation", "consulting", "ai", "devops", "cloud", "uiux", "api", "maintenance", "itsm"],
  "Core Services": ["innovation", "partnerships", "implementation", "consulting"],
  "Technology Solutions": ["ai", "devops", "cloud"],
  "Development & Design": ["uiux", "api"],
  "Support & Management": ["maintenance", "itsm"]
};

const serviceData = [
  // {
  //   icon: <Rocket className="w-6 h-6" />,
  //   id: "innovation",
  //   title: "Drive Innovation with Finxbridge",
  //   description: "Built for Transformation. Designed for Impact.",
  //   highlights: [
  //     "Technology modernization & transformation consulting",
  //     "Cross-industry digital solution design",
  //     "Agile & scalable implementation models",
  //     "End-to-end project execution with measurable ROI"
  //   ],
  //   colorClass: "bg-finx-primary",
  //   iconBgClass: "bg-finx-primary/10"
  // },
  {
    icon: <Handshake className="w-6 h-6" />,
    id: "partnerships",
    title: "System Integration (SI) Partnerships",
    description: "Unifying Technology Ecosystems for Seamless Collaboration",
    highlights: [
      "Integrated solutions across CRM, ERP, cloud, and automation platforms",
      "Co-delivery and white-label services with technology OEMs",
      "End-user adoption, training, and change management support",
      "Marketing and sales enablement for partner growth"
    ],
    colorClass: "bg-finx-secondary",
    iconBgClass: "bg-finx-secondary/10"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    id: "implementation",
    title: "Implementation Services",
    description: "From Blueprint to Business Value",
    highlights: [
      "System requirement analysis & architecture design",
      "Platform setup, customization, and integration",
      "Data migration and process automation",
      "Testing, go-live support, and stabilization services"
    ],
    colorClass: "bg-finx-green",
    iconBgClass: "bg-finx-green/10"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    id: "consulting",
    title: "IT Consulting",
    description: "Smart Technology Advisory for Growing Businesses",
    highlights: [
      "IT strategy, budgeting, and infrastructure planning",
      "Cloud migration strategy and risk assessment",
      "Cybersecurity readiness and compliance advisory",
      "Emerging tech adoption (AI, Blockchain, RPA)"
    ],
    colorClass: "bg-finx-navy",
    iconBgClass: "bg-finx-navy/10"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    id: "maintenance",
    title: "Software Maintenance",
    description: "Optimize, Secure, and Evolve with Confidence",
    highlights: [
      "Corrective and adaptive maintenance",
      "Performance enhancements and tuning",
      "Security patching and technical support",
      "SLA-based support models for critical apps"
    ],
    colorClass: "bg-finx-primary",
    iconBgClass: "bg-finx-primary/10"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    id: "uiux",
    title: "UI/UX Development",
    description: "User Experiences That Elevate Your Brand",
    highlights: [
      "UX research and user journey mapping",
      "Mobile-first and responsive UI design",
      "Prototyping and usability testing",
      "Design systems and accessibility compliance"
    ],
    colorClass: "bg-finx-secondary",
    iconBgClass: "bg-finx-secondary/10"
  },
  {
    icon: <Database className="w-6 h-6" />,
    id: "ai",
    title: "AI Solutions",
    description: "Unlock Intelligence from Data, Drive Real Impact",
    highlights: [
      "Recommendation systems and personalization engines",
      "Natural Language Processing (chatbots, sentiment analysis)",
      "Computer Vision (image classification, OCR)",
      "ML model development, tuning, and MLOps pipelines"
    ],
    colorClass: "bg-finx-green",
    iconBgClass: "bg-finx-green/10"
  },
  {
    icon: <Plug className="w-6 h-6" />,
    id: "devops",
    title: "DevOps Consulting",
    description: "Deliver Software Better, Faster, and Smarter",
    highlights: [
      "CI/CD pipeline setup and automation",
      "Infrastructure as Code (IaC) using tools like Terraform, Ansible",
      "Containerization with Docker and Kubernetes",
      "Monitoring, logging, and rollback strategies"
    ],
    colorClass: "bg-finx-navy",
    iconBgClass: "bg-finx-navy/10"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    id: "itsm",
    title: "IT Service Management (ITSM)",
    description: "Modernize Your IT Operations with Best Practices",
    highlights: [
      "Service desk setup and automation",
      "Incident, change, and asset management systems",
      "CMDB (Configuration Management Database) implementation",
      "Self-service portals and knowledge base systems"
    ],
    colorClass: "bg-finx-primary",
    iconBgClass: "bg-finx-primary/10"
  },
  {
    icon: <Link className="w-6 h-6" />,
    id: "api",
    title: "API Integrations",
    description: "Connect Everything. Automate Anything.",
    highlights: [
      "RESTful and GraphQL API design",
      "Third-party payment, KYC, and CRM integrations",
      "Custom middleware and gateway development",
      "API lifecycle management and documentation"
    ],
    colorClass: "bg-finx-secondary",
    iconBgClass: "bg-finx-secondary/10"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    id: "cloud",
    title: "Cloud Solutions",
    description: "Power Your Business with Scalable Cloud Architecture",
    highlights: [
      "Public, private, and hybrid cloud setup",
      "Cloud cost optimization and FinOps",
      "Cloud-native application development",
      "Security, governance, and compliance on cloud"
    ],
    colorClass: "bg-finx-green",
    iconBgClass: "bg-finx-green/10"
  }
];

const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Core Services");
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const serviceCards = servicesRef.current?.querySelectorAll('.service-card-container');
    serviceCards?.forEach((card) => observer.observe(card));

    return () => {
      serviceCards?.forEach((card) => observer.unobserve(card));
    };
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.keys(serviceCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-3 rounded-full transition-all duration-300",
              activeCategory === category
                ? "bg-finx-primary text-white shadow-lg"
                : "bg-gray-100 hover:bg-gray-200"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Display */}
      <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {serviceData
          .filter((service) => 
            serviceCategories[activeCategory].includes(service.id)
          )
          .map((service, index) => (
            <div 
              key={service.id}
              className="service-card-container opacity-0"
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                highlights={service.highlights}
                colorClass={service.colorClass}
                iconBgClass={service.iconBgClass}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
