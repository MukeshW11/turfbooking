// src/App.js
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import EntryPage from './components/EntryPage';
import HomePage from './football/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BookingPage from './football/bookingpage';
import AboutUs from './components/Aboutus';
import Footer from './components/Footer';
import Signup from './components/signup';
import MembershipManagement from './components/membership';
import ContactUs from './components/ContactUs';
import Homecric from './cricket/Homecric';
import Bookingcric from './cricket/bookingcric';
import Homebad from './badminton/Homebad';
import Bookingbad from './badminton/bookingbad';
import ReturnRefundPolicy from './refund/randr';
import Categories from './components/Categories';
import PaymentPage from './components/PaymentPage';
import Admindash from './admindashboard/admindashboard';
import { AuthProvider } from './components/AuthContext';
import AdminDashboard from './admindashboard/admindashboard';
import StudentEnrollment from './admindashboard/StudentEnrollment';
import TurfEnroll from "./admindashboard/TurfEnrollment";
import ProfilePage from './components/Profile';
import { UserProvider } from './components/UserContext';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

const Layout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminPage && <Navigation />}
      <Routes>
        {/* <</>     */}
        <Route path="/" element={<Home />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/membership" element={<MembershipManagement />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<EntryPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/football" element={<HomePage />} />
        <Route path="football/booknow/:id" element={<BookingPage />} />
        <Route path="/cricket" element={<Homecric />} />
        <Route path="cricket/booknow/:id" element={<Bookingcric />} />
        <Route path="/badminton" element={<Homebad />} />
        <Route path="badminton/booknow/:id" element={<Bookingbad />} />
        <Route path="ReturnRefundPolicy" element={<ReturnRefundPolicy />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<StudentEnrollment />} />
        <Route path="/admin/turfs" element={<TurfEnroll />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;
