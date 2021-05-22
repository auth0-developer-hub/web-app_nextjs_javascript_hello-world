import { withApiAuthRequired } from "@auth0/nextjs-auth0";

import { getAdminMessage } from "../../../services/messages.service";

export default withApiAuthRequired(function handler(req, res) {
  const message = getAdminMessage();
  res.status(200).json(message);
});
