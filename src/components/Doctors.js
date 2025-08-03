// Updated Doctors.js with images, specialization, and enhanced UI styling

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctorsData from '../data/doctors.json';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Our Doctors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition">
              <img
                src={doc.image || 'https://via.placeholder.com/300x200?text=Doctor'}
                alt={doc.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{doc.name}</h2>
                <p className="text-sm text-gray-600">{doc.specialization}</p>
                <p className={`mt-2 text-sm font-medium ${
      doc.available ? 'text-green-600' : 'text-red-500'
    }`}>
      {doc.available ? 'Available' : 'Unavailable'}
    </p>
                <Link to={`/doctor/${doc.id}`} className="mt-3 inline-block text-blue-600 hover:underline">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
