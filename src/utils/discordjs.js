const getMemberById = async (client, idMember, idGuid) => {
    let myGuild = client.guilds.cache.get(idGuid)
    if (!myGuild) myGuild = await client.guilds.fetch(idGuid);
    if (!myGuild) return undefined;

    let member = myGuild.members.cache.get(idMember);
    if (!member) member = await myGuild.members.fetch(idMember);
    return member
};

const deleteMsg = (msg, milisg) => {
    setTimeout(() => {
        msg.delete();
        }, milisg);
};

module.exports = {
    getMemberById,
    deleteMsg,
    getRolesByMsg: (msg) => {
        if (!msg) return;
        let roles = []
        msg.member.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    getRolesById: async (client, idMember, idGuid) => {

        const user = await getMemberById(client, idMember, idGuid);
        if (!user) return [];
        let roles = []
        user.roles.cache.map((rol) => {
            roles.push(rol.id)
        })
        return roles.length === 1 ? ["none"] : roles;
    },

    addRolesMember: async (member, idRol) => {

        if (member.roles.cache.has(idRol)) console.log("usuario con roles");
        try {
            await member.roles.add(idRol);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    },

    changeNickName: (member, tag, nickname) => {
        try {
            member.setNickname(tag +" "+nickname);
        } catch (error) {
            console.log(error);
        }
    },

    respondeTemp : (msg, res, milisg, plus) => {
        msg.reply(res).then((m) => {
            deleteMsg(m, milisg)
            deleteMsg(msg, milisg+plus)
        })
    },

    

    addReactionYesNo: (msg) => {
        msg.react('✅');
        msg.react('❌');
    },
    addReactionNo: (msg) => {
        msg.react('❌');
    },
    addReactionYes: (msg) => {
        msg.react('✅');
    }

}