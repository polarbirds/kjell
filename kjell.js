const Discord = require("discord.js");
const secrit = require("./secrit.json");
const store = require("./store.json");

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
                    store.jsonString = JSON.stringify(message.content.substr(1, message.content.length), functionReplacer);
                    console.log(JSON.stringify(message.content.substr(1, message.content.length), functionReplacer))
                    var res = eval(message.content.substr(1, message.content.length));
                    message.channel.send(">" + res);
                } catch(err) {
                    message.channel.send("Sumthin went wrang: " + err)
                }
            }
        }
    }
});

function functionReplacer(key, value) {
    if (typeof(value) === 'function') {
        return value.toString();
    }
    return value;
}

client.login(secrit.token);


// Prevent imports
// var Module = require('module');
// var originalRequire = Module.prototype.require;

// Module.prototype.require = function(){
//   if (arguments.contains("vagene")) return {niga: () => "kek"};
//   return originalRequire.apply(this, arguments);
// };