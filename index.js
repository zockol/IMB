
import { Client, GatewayIntentBits } from "discord.js";
import * as run from "./src/setup/start.js";
import dotenv from "dotenv"
dotenv.config();


  
const client = new Client({
intents: [
    GatewayIntentBits.Guilds
],
});

client.on("ready", (bot) => {
    run.clearTerminalOnStart()
    run.printBotInfoOnStart(bot)
    run.printGuildNameAndSize(bot)
})

client.login(process.env.TOKEN);
