"use client";

import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useMessage } from "../services/use-message";

const Protected = () => {
  const { message } = useMessage({
    url: `/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Protected Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a <strong>protected message</strong>.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <CodeSnippet title="Protected Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Protected;
