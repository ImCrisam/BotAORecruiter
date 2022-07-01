const Config = require('../../services/config');
const Commands = require('./commands');
const Utils = require('../utils/discordjs');


module.exports = {

	init: (msg, config,  param = ["none"]) => {

		const configChannel = Config.getConfigCommands(msg.channelId);
		if (!configChannel) return;

		const execute = param.shift().toLocaleLowerCase();

		const command = configChannel.commands[execute]
		if (!command) return;

		const channelOut  = Config.getConfigOutput(execute)

		let executed = [];
		Utils.getRolesByMsg(msg).forEach(rol => {
			console.log(rol, " : ", command[rol], " - ", Commands.hasOwnProperty(command[rol]));
			if (Commands.hasOwnProperty(command[rol]) && !executed.includes(command[rol])) {
				Commands[command[rol]](msg, param, channelOut)
				executed.push(command[rol])
			}
		});


	},

}