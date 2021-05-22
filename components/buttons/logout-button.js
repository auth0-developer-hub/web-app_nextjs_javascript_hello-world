import React from "react";
import { useRouter } from "next/router";

export const LogoutButton = () => {
  const router = useRouter();

  return (
    <button
      className="button button--primary button--compact"
      onClick={() => router.push("/api/auth/logout")}
    >
      Log Out
    </button>
  );
};
