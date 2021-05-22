import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { useRouter } from "next/router";

import { AuthenticationButton } from "./buttons/authentication-button";

const NavBarTab = ({ href, label }) => {
  const router = useRouter();

  const isRouteActive = (routePath) => router.pathname === routePath;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(href)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={href}>
      <a className={navBarTabClassName}>{label}</a>
    </Link>
  );
};

NavBarTab.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <div className="nav-bar__brand">
          <Link href="/">
            <img
              className="nav-bar__logo"
              src="https://images.ctfassets.net/23aumh6u8s0i/1UiaijF2PoaHIfcaIMRWYZ/cba84a2df9ba67f48e80aa117d0c78a3/auth0-shield.svg"
              alt="Auth0 shield logo"
              width="35.98"
              height="40"
            />
          </Link>
        </div>
        <div className="nav-bar__tabs">
          <NavBarTab href="/profile" label="Profile" />
          <NavBarTab href="/external-api" label="External API" />
        </div>
        <div className="nav-bar__actions">
          <AuthenticationButton />
        </div>
      </nav>
    </div>
  );
};
