import { Client } from "revolt.js";
let client = new Client();

client.on("ready", async () => console.info(`Logged in as ${client.user.username}!`));

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("sus")) return message.channel.sendMessage("sus!");
});

// To login as a bot:
client.loginBot("TOKEN_HERE");
