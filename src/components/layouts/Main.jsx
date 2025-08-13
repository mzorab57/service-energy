import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import LoadingScreen from "../../components/ui/LoadingScreen";

const Main = () => {

  const LazyComponent = ({ children }) => (
  <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
);
  return (  
    <LazyComponent>
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </LazyComponent>
  );
};

export default Main;
