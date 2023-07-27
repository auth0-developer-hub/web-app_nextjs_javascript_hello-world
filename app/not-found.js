"use client";

import { PageLayout } from "./components/page-layout";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Not Found
        </h1>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
