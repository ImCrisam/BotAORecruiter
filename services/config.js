const data = require('./config/guilds');
// const configReaction = require('../configChannel/configChannelReactions');

module.exports = {

    getConfigGuild: (guildID) => {
        return data[guildID]
    },

    // getConfigReactions: (channelID) => {
    //     return configReaction[channelID]
    // }

}