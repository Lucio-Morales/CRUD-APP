// 1. PublicDashboard debera ser lo primero que ven los usuarios al ingresar a la app.
// 2. Debera tener una NavBar.
// 3. Debera tener una seccion donde se muestran todos los productos.

import NavBar from "../../components/navBar/NavBar";

const PublicDashboard = () => {
  return (
    <>
      <div>
        <NavBar />
        <h1>PublicDashboard</h1>
      </div>
    </>
  );
};

export default PublicDashboard;
