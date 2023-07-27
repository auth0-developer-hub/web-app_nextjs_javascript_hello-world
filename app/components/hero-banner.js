import Image from "next/image";

export const HeroBanner = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/nextjs-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <Image
          className="hero-banner__image"
          src={logo}
          alt="Next.js logo"
          height={108}
          width={108}
        />
      </div>
      <h1 className="hero-banner__headline">Hello, Next.js World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for Next.js web apps using <strong>Auth0</strong>.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/web-app/nextjs/basic-authentication"
        className="button button--secondary"
      >
        Check out the Next.js code sample →
      </a>
    </div>
  );
};
