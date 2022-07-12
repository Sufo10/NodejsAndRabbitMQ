import amqp, { Channel, Connection } from "amqplib";
import dotenv from "dotenv";
dotenv.config();

export const publishToQueue = async (queueName: string, payload: string) => {
  const connection: Connection = await amqp.connect("amqp://localhost");

  //channel creation
  const channel: Channel = await connection.createChannel();

  //aserting the queue to the channel
  channel.assertQueue(queueName);

  //sending message to queue
  channel.sendToQueue(queueName, Buffer.from(payload));
};
