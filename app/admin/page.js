"use client";

import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useMessage } from "../services/use-message";

const Admin = () => {
  const { message } = useMessage({
    url: `/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Admin Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves an <strong>admin message</strong>.
            </span>
            <span>
              <strong>
                Only authenticated users with the{" "}
                <code>read:admin-messages</code> permission should access this
                page.
              </strong>
            </span>
          </p>
          <CodeSnippet title="Admin Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Admin;
