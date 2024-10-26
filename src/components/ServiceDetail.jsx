// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../Services.json'; 

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  // Replace newline characters with <br /> for proper formatting
  const formattedDetails = service.details.replace(/\n/g, '<br />');

  return (
    <div className="bg-gray-100 text-black py-20" id="service-details">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header with distinct color */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{service.title}</h2>

        {/* Description text in black */}
        <p className="text-black mb-4">{service.description}</p>

        {/* Formatted details in black */}
        <div 
          className="mt-4 text-black" 
          dangerouslySetInnerHTML={{ __html: formattedDetails }} 
        />

        {/* Link in green with hover effect */}
        <Link to="/" className="mt-4 inline-block text-green-500 hover:text-blue-500">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
