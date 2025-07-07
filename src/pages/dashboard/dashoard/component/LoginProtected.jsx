import { Navigate, useLocation } from "react-router-dom";

const LoginProtected = ({ children }) => {
      const location = useLocation();
      const isAuthenticated = localStorage.getItem("token");

      if (isAuthenticated && location.pathname == "/login") {
            // Authenticated user trying to access login page
            return <Navigate to="/" replace />;
      }


      return children;
};

export default LoginProtected;
