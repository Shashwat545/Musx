const {Client, Intents}=require('discord.js');
const {Player}=require('discord-player');
//Configure the .env_sample file with your own Discord bot token
require('dotenv').config();
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
global.player=new Player(client, client.config.app.discordPlayer);
require('./assets/loader');
require('./assets/events');
client.login(client.config.app.token);