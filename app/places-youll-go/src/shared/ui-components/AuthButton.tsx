import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = () => {

  return LogoutButton() || LoginButton();

};

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}>Log Out</button>
  );
}

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
}