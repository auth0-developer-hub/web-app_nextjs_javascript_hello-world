"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";

export const MobileNavBarButtons = () => {
  const { user } = useUser();

  return (
    <div className="mobile-nav-bar__buttons">
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
