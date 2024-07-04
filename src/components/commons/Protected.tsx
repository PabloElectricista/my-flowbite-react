import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  
  // eslint-disable-next-line no-constant-condition
  return true ?   
    <Outlet />
    :
    <Navigate to='/login' />
}
