import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import { callExternalApi } from "../../../services/external-api.service";

const apiServerUrl = process.env.API_SERVER_URL;

const GET = withApiAuthRequired(async (req, res) => {
  try {
    const { accessToken } = await getAccessToken(req, res);

    const config = {
      url: `${apiServerUrl}/api/messages/protected`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data, error, status } = await callExternalApi({
      config,
    });

    if (data) {
      return NextResponse.json(data);
    }

    return NextResponse.json(error, { status: status });
  } catch (error) {
    const message = "Something went wrong";

    return NextResponse.json(message, { status: 500 });
  }
});

export { GET };
