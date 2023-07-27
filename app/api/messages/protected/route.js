import { NextResponse } from "next/server";

export async function GET() {
  const message = {
    text: "This is a protected message.",
  };

  return NextResponse.json(message);
}
