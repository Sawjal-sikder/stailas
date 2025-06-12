import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ForgotPassVerfify from './pages/auth/ForgotPassVerfify';
import SetNewPassword from './pages/auth/SetNewPassword';
import Success from './pages/auth/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* For authentication and authorizition */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/verify" element={<ForgotPassVerfify />} />
        <Route path="/new-password" element={<SetNewPassword />} />
        <Route path="/password-success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
