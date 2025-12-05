import { Navigate, Outlet } from 'react-router-dom'

function MainLayout() {

  const accessToken = localStorage.getItem("accessToken");
  
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
        <Outlet />
    </>
  )
}

export default MainLayout
