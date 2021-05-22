import React from "react";

export const HeroBanner = () => {
  const logo =
    "https://images.ctfassets.net/23aumh6u8s0i/3MKzPSOjFaiT1q4HKwawcf/8169378f18d5af814f5d37e39b58a8ea/nextjs.svg";

  const openQuickStart = () => {
    window.open(
      "https://auth0.com/docs/quickstart/webapp/nextjs",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className="hero-banner">
      <img className="hero-banner__logo" src={logo} alt="Next.js logo" />
      <h1 className="hero-banner__headline">Hello, Next.js World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for a Next.js app using <strong>Auth0</strong>.
      </p>

      <button onClick={openQuickStart} className="button button--secondary">
        Check out the Next.js Quickstart →
      </button>
    </div>
  );
};
