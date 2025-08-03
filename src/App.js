import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctors from './components/Doctors';
import DoctorProfile from './components/DoctorProfile';
import BookAppointment from './components/BookAppointment';


const App = () => {
  return (
    
    <Router>
      <div className="p-4">
        
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/book/:doctorId" element={<BookAppointment />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
