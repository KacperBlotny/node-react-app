import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

// Jeszcze nie działa

function PrivateRoute() {
  const loggedIn = useAuthStatus();

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
