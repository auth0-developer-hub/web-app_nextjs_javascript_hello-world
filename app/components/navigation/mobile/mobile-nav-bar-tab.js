"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const MobileNavBarTab = ({ path, label, handleClick }) => {
  const pathname = usePathname();
  const isRouteActive = (path) => pathname === path;

  let mobileNavBarTabClassName = "mobile-nav-bar__tab";

  if (isRouteActive(path)) {
    mobileNavBarTabClassName += " mobile-nav-bar__tab--active";
  }

  return (
    <Link
      href={path}
      className={mobileNavBarTabClassName}
      onClick={handleClick}
    >
      <div>{label}</div>
    </Link>
  );
};
