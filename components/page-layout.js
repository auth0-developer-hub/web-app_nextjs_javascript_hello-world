import { NavBar } from "./nav-bar";
import { Footer } from "./footer";
import { Loader } from "./loader";

import { useUser } from "@auth0/nextjs-auth0";

const PageLayout = ({ children }) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
