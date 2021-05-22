import { getPublicMessage } from "../../../services/messages.service";

export default function handler(req, res) {
  const message = getPublicMessage();
  res.status(200).json(message);
}
