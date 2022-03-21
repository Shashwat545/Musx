module.exports={
    app:{
        prefix:'!',
        token: process.env.DISCORD_BOT_API,
        playing:'your favourite music by Shashwat ❤️',
        discordPlayer:{
            ytdlOptions:{
                quality:'highestaudio',
                highWaterMark:1<<25
            }
        }
    }
};