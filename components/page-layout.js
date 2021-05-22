import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <NavBar />
    <div className="page-layout__content">{children}</div>
    <Footer />
  </div>
);

export default PageLayout;
