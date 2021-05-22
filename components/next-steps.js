import React from "react";
import PropTypes from "prop-types";

const NextStep = ({ title, description, resourceUrl, icon }) => (
  <a
    href={resourceUrl}
    className="next-step"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="next-step__headline">
      <img className="next-step__icon" src={icon} alt="external link icon" />
      {title}
    </h3>
    <p className="next-step__description">{description}</p>
  </a>
);

NextStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string.isRequired,
};

export const NextSteps = () => (
  <div className="next-steps">
    <h2 className="next-steps__title">Explore Auth0 Features</h2>
    <div className="next-steps__grid">
      <NextStep
        title="Identity Providers"
        description="Auth0 supports social providers such as Google, Facebook, and Twitter, along with Enterprise providers such as Microsoft Office 365, Google Apps, and Azure. You can also use any OAuth 2.0 Authorization Server."
        resourceUrl="https://auth0.com/docs/connections"
        icon="https://cdn.auth0.com/website/pricing/addons/hipaa-baa-icon.svg"
      />
      <NextStep
        title="Multi-Factor Authentication"
        description="You can require your users to provide more than one piece of identifying information when logging in. MFA delivers one-time codes to your users via SMS, voice, email, WebAuthn, and push notifications."
        resourceUrl="https://auth0.com/docs/multifactor-authentication"
        icon="https://cdn.auth0.com/website/pricing/addons/enterprise-mfa-icon.svg"
      />
      <NextStep
        title="Attack Protection"
        description="Auth0 can detect attacks and stop malicious attempts to access your application such as blocking traffic from certain IPs and displaying CAPTCHA. Auth0 supports the principle of layered protection in security that uses a variety of signals to detect and mitigate attacks."
        resourceUrl="https://auth0.com/docs/attack-protection"
        icon="https://cdn.auth0.com/website/pricing/addons/advanced-protection-icon.svg"
      />
      <NextStep
        title="Serverless Extensibility"
        description="Actions are functions that allow you to customize the behavior of Auth0. Each action is bound to a specific triggering event on the Auth0 platform. Auth0 invokes the custom code of these Actions when the corresponding triggering event is produced at runtime."
        resourceUrl="https://auth0.com/docs/actions"
        icon="https://cdn.auth0.com/website/pricing/addons/private-cloud-icon.svg"
      />
    </div>
  </div>
);
