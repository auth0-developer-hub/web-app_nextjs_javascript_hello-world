"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBarTab = ({ path, label }) => {
  const pathname = usePathname();
  const isRouteActive = (path) => pathname === path;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(path)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={path} className={navBarTabClassName}>
      {label}
    </Link>
  );
};
