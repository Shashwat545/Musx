module.exports=(client, message)=>{
    if(message.channel.type==='dm'||message.author.bot)
        return;
    const prefix=client.config.app.prefix;
    if(message.content.indexOf(prefix)!==0 || message.content.length===1)
        return;
    const query=message.content.slice(prefix.length).trim().split(/ +/g);
    const command=query.shift().toLowerCase();
    const cmd=client.commands.get(command)||client.commands.find(cmd=>cmd.aliases && cmd.aliases.includes(command));
    if(cmd && cmd.voiceChannel) {
        if(!message.member.voice.channel)
            return message.channel.send(`You are not connected to a voice channel ${message.author}... 🤷‍♂️`);
        if(message.guild.me.voice.channel && message.member.voice.channel.id!==message.guild.me.voice.channel.id)
            return message.channel.send(`You're not on the same voice channel as me ${message.author}... Please join back the previous voice channel 😅`);
    }
    if(cmd)
        cmd.execute(client, message, query);
};