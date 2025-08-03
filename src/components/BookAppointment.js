import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [confirmedData, setConfirmedData] = useState(null);

  useEffect(() => {
    const foundDoctor = doctorsData.find(doc => doc.id.toString() === doctorId);
    setDoctor(foundDoctor);
  }, [doctorId]);

  if (!doctor) return <div className="text-center mt-8 text-red-600">Doctor not found.</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      {!confirmedData ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Book Appointment with {doctor.name} ({doctor.specialization})
          </h2>
          <AppointmentForm doctor={doctor} onConfirm={setConfirmedData} />
        </>
      ) : (
        <div className="bg-white max-w-md mx-auto p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Appointment Confirmed!</h2>
          <p className="mb-2">Token Number: #{Math.floor(Math.random() * 1000)}</p>
          <p className="mb-2">Doctor: {doctor.name}</p>
          <p className="mb-2">Specialization: {doctor.specialization}</p>
          <p className="mb-2">Date & Time: {new Date(confirmedData.datetime).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
