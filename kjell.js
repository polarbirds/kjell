const Discord = require("discord.js");
const secrit = require("./secrit.json");

const client = new Discord.Client();

client.on("ready", (message) => {
    console.log("Hey");
});

client.on("message", (message) => {
    var msg = message.content;

    if (!message.author.bot) {
        if (msg.startsWith(">")) {
            if (msg.includes("process.exit") || msg.includes("exec_")) {
                message.channel.send("Fuck you!");
            } else {
                try {
                    var res = eval(message.content.substr(1, message.content.length));
                    message.channel.send(">" + res);
                } catch(err) {
                    message.channel.send("Sumthin went wrang: " + err)
                }
            }
        }
    }
});

client.login(secrit.token);