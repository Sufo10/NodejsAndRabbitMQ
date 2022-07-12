import amqp, { Connection, Channel, Message } from "amqplib";

//IIFE function implementation
(async () => {
  const connection: Connection = await amqp.connect("amqp://localhost");

  const channel: Channel = await connection.createChannel();

  channel.consume(
    "user-messages",
    (message) => {
      console.log(`Message: ${message?.content.toString()}`);
      channel.ack(message!);
    },
    //if true msg are deleted after read
    { noAck: false }
  );
})();
