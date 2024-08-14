import React from 'react';
import { useNavigate } from 'react-router-dom';
import StaffChart from './StaffChart';
import StudentChart from './StudentChart';
// import CourseChart from './CourseChart';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => handleNavigate('/admin/users')}>Users</button>
        <button onClick={() => handleNavigate('/admin/turfs')}>Turfs</button>
        {/* <button onClick={() => handleNavigate('/fees-status')}>Payment status</button> */}
        {/* <button onClick={() => handleNavigate('/important-stats')}>Important Stats</button> */}
      </div>
      <div className="content">
        <div className="chart-container">
          <h2>Turf Registrations</h2>
          <StaffChart />
          <button onClick={() => handleNavigate('/admin/turfs')}>View Turf Page</button>
        </div>
        <div className="chart-container">
          <h2>Users Registration</h2>
          <StudentChart />
          <button onClick={() => handleNavigate('/admin/users')}>View user Page</button>
        </div>
        {/* <div className="chart-container">
          <h2>Course Distribution</h2>
          <CourseChart />
          <button onClick={() => handleNavigate('/course-page')}>View Course Page</button>
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;