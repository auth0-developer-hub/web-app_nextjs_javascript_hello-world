import React from "react";
import PropTypes from "prop-types";

const FooterHyperlink = ({ children, path }) => {
  return (
    <a
      className="footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

FooterHyperlink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Footer = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-grid__info">
          <div className="footer-info__message">
            <p className="footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <FooterHyperlink path="https://auth0.com/">Auth0</FooterHyperlink>
            </p>
            <p className="footer-message__description">
              <FooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device&nbsp;
                </span>
                <u>in less than 10 minutes</u>
              </FooterHyperlink>
            </p>
          </div>
          <div className="footer-info__button">
            <button
              className="button button--secondary"
              onClick={() =>
                window.open(
                  "https://auth0.com/signup",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Create Free Auth0 Account
            </button>
          </div>
          <div className="footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="footer-info__resource-list-item"
              >
                <FooterHyperlink path={resource.path}>
                  {resource.label}
                </FooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-grid__brand">
          <div className="footer-brand">
            <img
              className="footer-brand__logo"
              src="https://images.ctfassets.net/23aumh6u8s0i/1UiaijF2PoaHIfcaIMRWYZ/cba84a2df9ba67f48e80aa117d0c78a3/auth0-shield.svg"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <FooterHyperlink path="https://auth0.com/">
              Auth0 Inc
            </FooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
