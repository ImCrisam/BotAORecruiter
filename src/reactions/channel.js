const Discordjs = require('../utils/discordjs');
const Actions = require('./actions');

module.exports = {

	init: async (Client, interaction, user, config) => {

		if (!config.reactions) {
			console.log("conf reaction not found");
			return
		}
		const channelID = interaction.message.channelId;

		const channel = await Client.channels.cache.get(channelID);
		const msg = await channel.messages.fetch(interaction.message.id)

		const content = msg.content.split(" ");
		const confiReaction = content[0] ? config.reactions[content[0].toLowerCase()][interaction._emoji.name] : undefined
		if (!confiReaction) {
			console.log("conf reaction.action not found");
			return
		}

		if (!Actions.hasOwnProperty(confiReaction.action)) {
			console.log("action not found");
			return
		}

		let rolesUser = await Discordjs.getRolesById(Client, user.id, interaction.message.guildId);

		if (!confiReaction.allowedRoles) {
			console.log("allowedRoles not found");
			return
		}
		confiReaction.allowedRoles.forEach((rol) => {
			if (rolesUser.includes(rol)) {
				console.log(rol, " : ", confiReaction.action, " - ", Actions.hasOwnProperty(confiReaction.action));
				Actions[confiReaction.action](Client, interaction, user, confiReaction).then((res) => {
						
					if (res.resut) {
						channel.send("<@" + user.id + ">  " + confiReaction.description + " " + content[1] + "  ref{ " + res.description + "} ")
					}
				})

				return;
			}
		})
	},

}