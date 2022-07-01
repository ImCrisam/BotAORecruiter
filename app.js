require('dotenv').config()
const commands = require('./src/commands/channel');
const reaction = require('./src/reactions/init');
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

	// if(user.bot) return;
	// reaction.init(interaction, user, client)
});


client.on("messageCreate", (msg) => {
	const configGuild = Config.getConfigGuild(msg.guildId);
	if (!configGuild) return;

	const configChannel = configGuild[msg.channelId];
	if (!configChannel) return;

	commands.init(msg, configChannel)
});



client.login(process.env.DISCORD_TOKEN); 