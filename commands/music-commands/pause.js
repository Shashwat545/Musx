module.exports={
    name:'pause',
    aliases:[],
    voiceChannel:true,
    execute(client, message){
        const queue=player.getQueue(message.guild.id);
        if(!queue)
            return message.channel.send(`${message.author} There is no music being played to pause right now ❌`);
        const result=queue.setPaused(true);
        return message.channel.send(result?`${queue.current.title} has been paused 👍🏻`:`Oops ${message.author} something went wrong 🤕`);
    },
};