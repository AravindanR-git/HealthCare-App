import React, { useState } from 'react';

const AppointmentForm = ({ doctor }) => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    dob: '',
    email: '',
    mobile: '',
    datetime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Math.floor(1000 + Math.random() * 9000);
    alert(
      `Appointment Confirmed!\n\nSpecialization: ${doctor?.specialization}\nDate & Time: ${formData.datetime}\nToken Number: ${token}`
    );
    setFormData({
      name: '',
      sex: '',
      dob: '',
      email: '',
      mobile: '',
      datetime: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow bg-white">
      <div>
        <label className="block text-sm font-medium text-gray-700">Patient Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Sex</label>
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        >
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength="10"
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Appointment Date & Time</label>
        <input
          type="datetime-local"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Confirm Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
