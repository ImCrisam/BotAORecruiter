const Discordjs = require('../utils/discordjs');


module.exports = {

    apply: async (Client, interaction, user, config) => {
        const idNewPlayer = interaction.message.embeds[0].author.name;
        const member = await Discordjs.getMemberById(Client, idNewPlayer, interaction.message.guildId)
        const addedRoll = await Discordjs.addRolesMember(member, config.memberRol)
        if (addedRoll) {
            Discordjs.changeNickName(member, "[MDB]", interaction.message.embeds[0].title)
            interaction.message.reply('OK')
                .then(msg => {
                    Discordjs.deleteMsg(interaction.message, 3500);
                    Discordjs.deleteMsg(msg, 4000);
                   
                })
        }else{
            console.log("fail add rol");
        }
    },

    delete: (Client, interaction, user, config) => {
        Discordjs.respondeTemp(interaction.message, "delete", 3000,1000)
        
    }

}