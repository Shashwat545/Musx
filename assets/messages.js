player.on('error', (queue, error)=>{
    console.log(`The queue has encountered an error: ${error.message}`);
});
player.on('connectionError', (queue, error)=>{
    console.log(`The connection has encountered an error: ${error.message}`);
});
player.on('trackStart', (queue, track)=>{
    if(queue.repeatMode!==0)
        return;
    queue.metadata.send(`${track.title} has started playing in **${queue.connection.channel.name}** 🎶`);
});
player.on('trackAdd', (queue, track)=>{
    queue.metadata.send(`${track.title} has been added in the queue 👌`);
});
player.on('botDisconnect', (queue)=>{
    queue.metadata.send('I was removed from the voice channel... the queue has been emptied 🙄');
});
player.on('channelEmpty', (queue)=>{
    queue.metadata.send('There is no one on the voice channel... exiting the voice channel 🙄');
});
player.on('queueEnd', (queue)=>{
    queue.metadata.send('The queue is finished ✅');
});