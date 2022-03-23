module.exports={
    name:'stop',
    aliases:[],
    voiceChannel:true,
    execute(client, message){
        const queue=player.getQueue(message.guild.id);
        if(!queue||!queue.playing)
            return message.channel.send(`${message.author} There is no music being played to stop ❌`);
        queue.destroy();
        message.channel.send(`Music has stopped and queue is cleared`);
    },
};