var chance = [ //Have to add position attribute to the Advance to Speicific locations
    {
        Name: "Advance to Go",
        Events: ["advance", "collectGo"] 
    },

    {
        Name: "Advance to Illinois Ave",
        Events:["advance", "collectGo"]
    },

    {
        Name:"Advance to St.Charles Place",
        Events:["advance", "collectGo"],
        Position: 12
    },

    {
        Name: "Advance token to nearest Utility.",
        Events:["advance", "collectGo"]  
    },

    {
        Name: "Advance to nearest Railroad.",
        Events:["advance()", "collectGo"] 
    },

    {
        Name: "Get Out of Jail Free",
        Events:["addToJailSlot"] 
    },

    {
        Name: "Go Back 3 Spaces",
        Events:["advance"]
    },

    {
        Name: "Go to Jail",
        Events:["goToJail"]
    },

    {
        Name: "Make general repairs on all your properties",
        Events:["payToBank"],
        Amount: [25, 100] //25 is per house and 100 is per hotel
    },

    {
        Name: "Advance to Reading Railroad",
        Events:["advance", "collectGo"]
    },

    {
        Name: "Advance to Boardwalk",
        Events:["advance"]
    },

    {
        Name: "Go Forward 3 Spaces",
        Events:["advance"]
    },

    {
        Name: "Advance to Free Parking",
        Events:["advance", "collectGo"] 
    }
]