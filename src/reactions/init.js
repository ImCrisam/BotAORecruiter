// const Config = require('../../services/configChannel');
// const Discordjs = require('../utils/discordjs');
// const Actions = require('./actions');

// module.exports = {

// 	init: async (interaction, user, Client) => {

// 		const channelID = interaction.message.channelId

// 		const configChannel = Config.getConfigReactions(channelID);
// 		if (!configChannel) return;

// 		const channel = await Client.channels.cache.get(channelID);

// 		const msg = await channel.messages.fetch(interaction.message.id)

// 		const confiReaction = msg.content ? configChannel[msg.content.toLowerCase()][interaction._emoji.name] : undefined
// 		if (!confiReaction) return;

// 		if (!Actions.hasOwnProperty(confiReaction.action)) return;

// 		let rolesUser =  await Discordjs.getRolesById(Client, user.id);
		
// 		confiReaction.roles.forEach((rol) => {
// 			if(rolesUser.includes(rol)){
// 				Actions[confiReaction.action](interaction, user, Client)
// 				return;
// 			}
// 		})
// 	},

// }