// 1. PublicDashboard debera ser lo primero que ven los usuarios al ingresar a la app.
// 2. Debera tener una NavBar.
// 3. Debera tener una seccion donde se muestran todos los productos.

import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/navBar/NavBar";
import Profile from "../profile/Profile";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <NavBar />
        {isAuthenticated && <Profile />}
      </div>
    </>
  );
};

export default Landing;
