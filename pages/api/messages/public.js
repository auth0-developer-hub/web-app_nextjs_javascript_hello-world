import { getMessage } from "../../../utils/get-message";

export default async function handler(req, res) {
  const message = await getMessage("public");
  res.status(200).json({ message });
}
