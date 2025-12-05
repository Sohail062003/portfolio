import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";

function AuthLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <>
          {!isLoginPage && (
            <header className="shadow-lg h-20  fixed top-0 left-0 w-full z-50 bg-white">
              <Navbar />
            </header>
          )}
        </>

        {/* Main */}
        <main className="flex-1 pt-20">
          <Outlet />
        </main>

        {/* Footer */}
        {!isLoginPage && <Footer />}
      </div>
    </>
  );
}

export default AuthLayout;
