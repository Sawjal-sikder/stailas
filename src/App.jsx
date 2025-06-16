import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Chat from './pages/StailasChat/Chat.jsx';
import Outfits from './pages/Outfits/Outfits.jsx';
import MyOutfit from './pages/myoutfits/MyOutfit.jsx';
import OutfitsDetails from './pages/Outfits/OutfitsDetails.jsx';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ForgotPassVerfify from './pages/auth/ForgotPassVerfify';
import SetNewPassword from './pages/auth/SetNewPassword';
import Success from './pages/auth/Success';
import AdminLogin from './pages/dashboard/admin/AdminLogin.jsx';
import AdminForgotPassword from './pages/dashboard/admin/AdminForgotPassword.jsx';
import AdminVerifyPass from './pages/dashboard/admin/AdminVerifyPass.jsx';
import AdminNewPassword from './pages/dashboard/admin/AdminNewPassword.jsx';
import AdminPasswordSuccess from './pages/dashboard/admin/AdminPasswordSuccess.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* For Main */}
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/myoutfit" element={<Outfits />} />
        <Route path="/outfit" element={<MyOutfit />} />
        <Route path="/outfit-details" element={<OutfitsDetails />} />
        {/* For authentication and authorizition */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/verify" element={<ForgotPassVerfify />} />
        <Route path="/new-password" element={<SetNewPassword />} />
        <Route path="/password-success" element={<Success />} />
        {/* For admin panel */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin/verify-code" element={<AdminVerifyPass />} />
        <Route path="/admin/new-password" element={<AdminNewPassword />} />
        <Route path="/admin/success" element={<AdminPasswordSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
