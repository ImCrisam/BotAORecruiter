/** permisos 1101055347824 */
require('dotenv').config()
const commands = require('./src/commands/channel');
const reaction = require('./src/reactions/channel');
const Config = require('./services/config');

const prefix = process.env.PREFIX


const { Client, Intents, Guild } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});


client.once('ready', (bot) => {
	console.log(bot.presence.status);

	client.user.setActivity(' La morada', { type: 'WATCHING' });
	client.user.setStatus('online');
});

client.on('messageReactionAdd', (interaction, user) => {
	if(user.bot) return;
	const configGuild = Config.getConfigGuild(interaction.message.guildId);
	if (!configGuild) return;

	const configChannel = configGuild[interaction.message.channelId];
	if (!configChannel) return;

	reaction.init(client, interaction, user, configChannel)
});


client.on("messageCreate", (msg) => {
	console.log("msg");
	const configGuild = Config.getConfigGuild(msg.guildId);
	if (!configGuild) return;

	const configChannel = configGuild[msg.channelId];
	if (!configChannel) return;

	commands.init(msg, configChannel)
});



client.login(process.env.DISCORD_TOKEN); 