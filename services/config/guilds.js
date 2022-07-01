module.exports = {
    //Guild discord
    "992444605591191552": {
        //Channels
        "992448419358572614": {
            "commands": {
                "!aplicar": {
                    "roles": {
                        "none": "apply",
                    },
                    "outChannel": "992448446873227284"
                },
                "default": {
                    "roles": {
                        "none": "delete"
                    },
                    "outChannel": undefined
                }
            },

        },
        "992448446873227284": {
            "reactions": {
                "apply": {
                    "✅": {
                        "action": "apply",
                        "allowedRoles": ["992528158727360662"],
                        "memberRol": "992527993614381086"
                    },
                    "❌": {
                        "action": "delete",
                        "allowedRoles": ["992527972336676936"]
                    }
                }
            }
        }

    }
}