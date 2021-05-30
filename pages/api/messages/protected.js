import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { getMessage } from "../../../utils/get-message";

export default withApiAuthRequired(async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res);

  if (accessToken === null) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const message = await getMessage("protected", options);

  res.status(200).json({ message });
});
