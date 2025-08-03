// src/components/DoctorCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-row items-center space-x-6 text-left transition hover:shadow-xl">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-24 h-24 object-cover rounded-full border-4 border-blue-100"
      />
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-blue-800">{doctor.name}</h2>
        <p className="text-sm text-gray-600">{doctor.specialty}</p>
        <p className={`mt-1 text-sm font-semibold ${doctor.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
          {doctor.availability}
        </p>
        <Link
          to={`/profile/${doctor.id}`}
          className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
