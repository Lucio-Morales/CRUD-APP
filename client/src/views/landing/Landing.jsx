import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/navBar/NavBar";
import Profile from "../profile/Profile";
import ProductsSection from "../../components/productsSection/ProductsSection";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <NavBar />
      <div>{isAuthenticated && <Profile />}</div>

      <ProductsSection />
    </>
  );
};

export default Landing;
