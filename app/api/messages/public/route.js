import { NextResponse } from "next/server";

export async function GET() {
  const message = {
    text: "This is a public message.",
  };

  return NextResponse.json(message);
}
