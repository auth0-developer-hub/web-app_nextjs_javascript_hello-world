import React, { useState } from "react";
import PageLayout from "../components/page-layout";

const ExternalApi = () => {
  const messages = {
    public: "Anyone can see this message.",
    protected: "Only authenticated users should see this message.",
    admin:
      "Only authenticated users with the read:admin-messages permission should see this message.",
  };

  const [message, setMessage] = useState(messages.public);
  const [activeMessage, setActiveMessage] = useState("public");

  const getMessage = (type) => {
    setActiveMessage(type);
    return setMessage(messages[type]);
  };

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 className="content__title">External API</h1>
        <div className="content__body">
          <p>
            You will use a button to call an external API using an access token,
            and the API will validate it using the API's audience value.
            <br />
            <strong>This route should be protected</strong>.
          </p>

          <div className="messages-grid">
            <div className="messages-grid__header">Messages</div>
            <div className="messages-grid__options">
              <div
                onClick={() => getMessage("public")}
                className={`messages-grid__option ${
                  activeMessage === "public" && "messages-grid__option--active"
                }`}
              >
                Public
              </div>
              <div
                onClick={() => getMessage("protected")}
                className={`messages-grid__option ${
                  activeMessage === "protected" &&
                  "messages-grid__option--active"
                }`}
              >
                Protected
              </div>
              <div
                onClick={() => getMessage("admin")}
                className={`messages-grid__option ${
                  activeMessage === "admin" && "messages-grid__option--active"
                }`}
              >
                Admin
              </div>
            </div>
            <code className="messages-grid__message">{message}</code>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExternalApi;
