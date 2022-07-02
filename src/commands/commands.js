const Discordjs = require('../utils/discordjs');
const Embeds = require('../utils/embeds');
const Albion = require('../../services/tools4Albion');
const Other = require('../../services/other');
module.exports = {

    help: (msg, param) => {

        console.log(msg);

        //msg.reply("✅")
    },

    apply: async (msg, params, channelOut) => {
        if (params.length == 0) {
            Discordjs.respondeTemp(msg, "Empty Nick", 4000, 1000)
        }

        const nick = params[0];
        const playersInfo = await Albion.getInfoPlayerName(nick);

        if (!playersInfo || playersInfo.length == 0 || playersInfo[0].Name !== nick) {
            let res = nick +" not found ";
            if (playersInfo && playersInfo.length != 0) {
                res += "~ found: ";
                playersInfo.forEach(element => {
                    res += element.Name + ", "
                });
            }
            Discordjs.respondeTemp(msg, res, 10000, 2000)
            
        } else {
            const allInfoPlayer = await Albion.getAllInfoPlayerID(playersInfo[0].Id)
            const isBanAlli = await Other.isBlackListAlli(playersInfo[0].Name)
            if (!isBanAlli) {
                Discordjs.changeNickName(msg.member, "[Aplico] " , params[0])
            } else {
                Discordjs.respondeTemp(msg, nick +" blacklisted AAA", 5000, 1000)
                Discordjs.changeNickName(msg.member, "[BList] " , params[0])
            }
            const newMsg = await msg.guild.channels.cache.get(channelOut).send(Embeds.infoPlayer(msg.author, allInfoPlayer, isBanAlli, params))
            if (newMsg) {
                Discordjs.respondeTemp(msg, nick +"Enviada", 4000, 1000)
            }
            if (isBanAlli) {
                Discordjs.addReactionNo(newMsg);
            } else {
                Discordjs.addReactionYesNo(newMsg);
            }

        }

    },

    delete: (Client, interaction, user, config) => {
        Discordjs.respondeTemp(interaction.message, "delete", 2000,1000)
        
    }

}