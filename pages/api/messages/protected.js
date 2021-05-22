import { withApiAuthRequired } from "@auth0/nextjs-auth0";

import { getProtectedMessage } from "../../../services/messages.service";

export default withApiAuthRequired(function handler(req, res) {
  const message = getProtectedMessage();
  res.status(200).json(message);
});
