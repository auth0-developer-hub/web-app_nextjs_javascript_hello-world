import Link from "next/link";
import Image from "next/image";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <Link href="/">
        <Image
          className="mobile-nav-bar__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
          width={82}
          height={24}
        />
      </Link>
    </div>
  );
};
