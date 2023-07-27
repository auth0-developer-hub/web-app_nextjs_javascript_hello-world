import { NextResponse } from "next/server";

export async function GET() {
  const message = {
    text: "This is an admin message.",
  };

  return NextResponse.json(message);
}
