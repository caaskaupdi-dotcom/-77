require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
  REST,
  Routes
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Bot test"),

  new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Check balance"),

  new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Claim daily reward")
].map(c => c.toJSON());

client.once("ready", async () => {
  console.log(${client.user.tag} online);

  const rest = new REST({ version: "10" })
    .setToken(process.env.TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands }
    );

    console.log("Commands loaded");
  } catch (err) {
    console.error(err);
  }
});

client.on("interactionCreate", async interaction => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "balance") {
    return interaction.reply("💰 Wallet: $1000");
  }

  if (interaction.commandName === "daily") {
    return interaction.reply("🎁 Daily reward: $500");
  }

});

client.login(process.env.TOKEN=MTUwNzg3MjYwNjQ4ODEwMDkzNA.G-xWoE.IqbZzA8z0mSDqFxqHmNotAEqJun3wRtzvyCw50);
