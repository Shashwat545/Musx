module.exports=async(client)=>{
    console.log(`Logged in to the bot ${client.user.username}`);
    console.log(`• The bot is ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.playing);
};