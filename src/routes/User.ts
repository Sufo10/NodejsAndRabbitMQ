import { Request, Response, Router } from "express";
import { publishToQueue } from "../services/MQService";

const router = Router();

router.post("/msg", async (req: Request, res: Response) => {
  const { queueName, payload } = req.body;
  await publishToQueue(queueName, payload);
  res.status(200).json({ "message-sent": true });
});

export default router;
