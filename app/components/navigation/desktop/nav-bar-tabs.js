"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      {user && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};
