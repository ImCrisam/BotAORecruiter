const Discordjs = require('../utils/discordjs');


module.exports = {

    apply: async (Client, interaction, user, config) => {
        const idNewPlayer = interaction.message.embeds[0].author.name;
        const member = await Discordjs.getMemberById(Client, idNewPlayer, interaction.message.guildId)
        const addedRoll = await Discordjs.addRolesMember(member, config.memberRol)

        if (addedRoll) {
            Discordjs.changeNickName(member, "[M.D.B]", interaction.message.embeds[0].title)
            interaction.message.reply('OK')
                .then(msg => {
                    Discordjs.deleteMsg(interaction.message, 3500);
                    Discordjs.deleteMsg(msg, 4000);

                })
            return {
                'resut': true,
                'description': interaction.message.embeds[0].fields[0].value
            };
        } else {
            console.log("fail add rol");
            return {
                'resut': false,
                'description': "fail add rol"
            };
        }
    },

    delete: async (Client, interaction, user, config) => {
        Discordjs.respondeTemp(interaction.message, "delete", 3000, 1000)
        return {
            'successful': true,
            'description': ""
        };

    }

}