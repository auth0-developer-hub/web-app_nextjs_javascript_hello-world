import { Auth0Features } from "./components/auth0-features";
import { HeroBanner } from "./components/hero-banner";
import { PageLayout } from "./components/page-layout";

const Home = () => (
  <PageLayout>
    <>
      <HeroBanner />
      <Auth0Features />
    </>
  </PageLayout>
);

export default Home;
