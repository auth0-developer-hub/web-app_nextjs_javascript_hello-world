import React from "react";

import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

import { useUser } from "@auth0/nextjs-auth0";

export const AuthenticationButton = () => {
  const { user } = useUser();

  return user ? <LogoutButton /> : <LoginButton />;
};
