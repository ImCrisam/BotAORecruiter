const Commands = require('./commands');
const Utils = require('../utils/discordjs');


module.exports = {

	init: (msg, config) => {

		if(msg.author.bot) return
		if(!config.commands) return

		const content = msg.content.split(" ");
		const command= content.shift();
		config = config.commands[command]?config.commands[command]:config.commands.default

		let executed = [];
		Utils.getRolesByMsg(msg).forEach(rol => {
			console.log(rol, " : ", config.roles[rol], " - ", Commands.hasOwnProperty(config.roles[rol]));
			if (Commands.hasOwnProperty(config.roles[rol]) && !executed.includes(config.roles[rol])) {
				Commands[config.roles[rol]](msg, content, config.outChannel)
				executed.push(config.roles[rol])
			}
		});


	},

}