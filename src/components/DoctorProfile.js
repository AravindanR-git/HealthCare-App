// DoctorProfile.js with routing and proper data fetching

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctorsData from '../data/doctors.json';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Doctor not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 hover:underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <img
            src={doctor.image || 'https://via.placeholder.com/200'}
            alt={doctor.name}
            className="w-full sm:w-64 h-64 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
            <p className="text-xl text-blue-600 mb-4">{doctor.specialization}</p>
            <p className={`mt-2 text-sm font-medium ${
      doctor.available ? 'text-green-600' : 'text-red-500'
    }`}>
      {doctor.available ? 'Available' : 'Unavailable'}
    </p>
            <p className="text-gray-700">Dr. {doctor.name} is an experienced specialist in {doctor.specialization}. You can book an appointment to consult.</p>
            <button
              onClick={() => navigate(`/book/${doctor.id}`)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
