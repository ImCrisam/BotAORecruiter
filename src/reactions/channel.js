const Discordjs = require('../utils/discordjs');
const Actions = require('./actions');

module.exports = {

	init: async (Client, interaction, user, config) => {

		if(!config.reactions) return
		const channelID = interaction.message.channelId;

		const channel = await Client.channels.cache.get(channelID);
		const msg = await channel.messages.fetch(interaction.message.id)


		const confiReaction = msg.content ? config.reactions[msg.content.toLowerCase()][interaction._emoji.name] : undefined
		if (!confiReaction) return;

		if (!Actions.hasOwnProperty(confiReaction.action)) return;

		let rolesUser =  await Discordjs.getRolesById(Client, user.id, interaction.message.guildId);
		
		if(!confiReaction.allowedRoles) return
		confiReaction.allowedRoles.forEach((rol) => {
			if(rolesUser.includes(rol)){
				Actions[confiReaction.action](Client, interaction, user, confiReaction)
				return;
			}
		})
	},

}