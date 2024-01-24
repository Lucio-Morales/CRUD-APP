// 1. NavBar debera contener: SearchBar,LoginButton,RegisterButton.

import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../searchBar/SearchBar";
import LoginButton from "../loginButton/LoginButton";
import LogoutButton from "../logoutButton/LogoutButton";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <SearchBar />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>
  );
};

export default NavBar;
