// 1. NavBar debera contener: SearchBar,LoginButton,RegisterButton.

import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../searchBar/SearchBar";
import LoginButton from "../loginButton/LoginButton";
import LogoutButton from "../logoutButton/LogoutButton";
import StoresButton from "../storesButton/StoresButton";
import SellerButtons from "../sellerButtons/SellerButtons";

const NavBar = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <SellerButtons />
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default NavBar;
