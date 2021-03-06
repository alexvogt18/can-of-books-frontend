// Login Programming Comes from auth0 documentation located at https://auth0.com/docs/quickstart/spa/react
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (<button onClick={() => loginWithRedirect()}>Log In</button>);
};

export default LoginButton;