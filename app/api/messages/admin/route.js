import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

const GET = withApiAuthRequired(async () => {
  const message = {
    text: "This is an admin message.",
  };

  return NextResponse.json(message);
});

export { GET };
