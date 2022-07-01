// const Discordjs = require('../utils/discordjs');


// module.exports = {

//     apply: async (interaction, user, Client) => {
//         const idNewPlayer = interaction.message.embeds[0].author.name;
//         const member = await Discordjs.getMemberById(Client, idNewPlayer)
//         const addedRoll = await Discordjs.addRolesMember(member, "985984547411873944")
//         if (addedRoll) {
//             Discordjs.changeNickName(member, "[MDB]", interaction.message.embeds[0].title)
//             interaction.message.reply('OK')
//                 .then(msg => {
//                     Discordjs.deleteMsg(interaction.message, 3500);
//                     Discordjs.deleteMsg(msg, 4000);
                   
//                 })
//         }
//     },

//     delete: (interaction) => {
//         Discordjs.deleteMsg(interaction.message, 2000);
        
//     }

// }