module.exports = {
    //Guild discord
    "983423285867974666": {
        //Channels
        "992553089431240766": {
            "commands": {
                "!aplicar": {
                    "roles": {
                        "none": "apply",
                    },
                    "minPVE":"50000000",
                    "minPVP":"5000000",
                    "outChannel": "992556524276818071"
                },
                "default": {
                    "roles": {
                        "none": "delete"
                    },
                    "outChannel": undefined
                }
            },

        },
        "992556524276818071": {
            "reactions": {
                "apply": {
                    "✅": {
                        "description": "add rol",
                        "action": "apply",
                        "allowedRoles": ["992606523849183332"],
                        "memberRol": "983425697592770651"
                        
                    },
                    "❌": {
                        "description": "delete apply",
                        "action": "delete",
                        "allowedRoles": ["992606523849183332"]
                    }
                }
            }
        }

    }
}