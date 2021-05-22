import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../components/page-layout";

const CodeSnippet = ({ code }) => (
  <div className="code-snippet__container">
    <div className="code-snippet__wrapper">
      <pre className="code-snippet__body">{code}</pre>
    </div>
  </div>
);

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
};

const Profile = () => {
  const user = {
    nickname: "Alex",
    name: "Alex Cero",
    picture:
      "https://images.ctfassets.net/23aumh6u8s0i/XWKpjS2uxXPDPGMl99FoV/d82a062cd4514a985fb47f8d4b5d3660/auth0-user.png",
    updated_at: "2021-05-04T21:33:09.415Z",
    email: "alex@example.com",
    email_verified: false,
    sub: "auth0|12345678901234567890",
  };

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 className="content__title">Profile</h1>
        <div className="content__body">
          <p>
            <strong>Only authenticated users can access this page.</strong>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <CodeSnippet code={JSON.stringify(user, null, 2)} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
