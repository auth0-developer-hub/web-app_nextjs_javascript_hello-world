"use client";

import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useMessage } from "../services/use-message";

const Public = () => {
  const { message } = useMessage({
    url: `/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Public Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a <strong>public message</strong>.
            </span>
            <span>
              <strong>Any visitor can access this page.</strong>
            </span>
          </p>
          <CodeSnippet title="Public Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Public;
