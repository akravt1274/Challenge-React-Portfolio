import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      {/* The Outlet component will conditionally swap between the different
      pages according to the URL */}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
