const {QueryType}=require('discord-player');
module.exports={
    name:'play',
    aliases:[],
    voiceChannel:true,
    async execute(client, message, args){
        if(!args[0])
            return message.channel.send(`${message.author} You need to type in a valid search query 🔍`);
        const result=await player.search(args.join(' '), {
            requestedBy:message.member,
            searchEngine:QueryType.AUTO
        });
        if(!result || !result.tracks.length)
            return message.channel.send(`${message.author} There were no results found 🔍`);
        const queue=await player.createQueue(message.guild, {metadata:message.channel});
        try{
            if(!queue.connection)
                await queue.connect(message.member.voice.channel);
        }
        catch{
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`${message.author} I'm unable to connect to the voice channel 📡`);
        }
        await message.channel.send(`Your ${result.playlist?'playlist':'track'} is being loaded... ⏲️`);
        !result.playlist?queue.addTrack(result.tracks[0]):queue.addTracks(result.tracks);
        if(!queue.playing)
            await queue.play();
    },
};