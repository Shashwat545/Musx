const {Client, Intents}=require('discord.js');
const {Player}=require('discord-player');
global.client=new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions:'everyone',
});
client.config=require('./config');
global.player=new Player(client, client.config.opt.discordPlayer);
require('./assets/preloader');
require('.assets/messages');
client.login(client.config.app.token);