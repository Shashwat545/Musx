module.exports={
    app:{
        prefix:'!', //Change the prefix of the bot commands from here
        token: process.env.DISCORD_BOT_API,
        status:'music ❤️', //Change the status of the bot
        discordPlayer:{
            ytdlOptions:{
                quality:'highestaudio',
                highWaterMark:1<<25
            }
        }
    }
};