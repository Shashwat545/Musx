module.exports={
    name:'resume',
    aliases:[''],
    voiceChannel:true,
    execute(client, message){
        const queue=player.getQueue(message.guild.id);
        if(!queue)
            return message.channel.send(`${message.author} There is no music being played to resume ❌`);
        const result=queue.setPaused(false);
        return message.channel.send(result?`${queue.current.title} has been resumed 👍🏻`:`Oops ${message.author} something went wrong 🤕`);
    },
};