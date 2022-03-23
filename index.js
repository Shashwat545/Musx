const {Client, Intents}=require('discord.js');
const {Player}=require('discord-player');
const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||3000;
app.use(express.json());
app.use(express.static("website"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/website/index.html'));
});
app.listen(port,()=>{
    console.log("Website is running on "+port)
});
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