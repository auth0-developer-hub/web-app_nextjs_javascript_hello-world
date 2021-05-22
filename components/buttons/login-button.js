import React from "react";
import { useRouter } from "next/router";

export const LoginButton = () => {
  const router = useRouter();

  return (
    <button
      className="button button--primary button--compact"
      onClick={() => router.push("/api/auth/login")}
    >
      Log In
    </button>
  );
};
