const millisecond=require('ms');
module.exports={
    name: 'latency',
    aliases: ['ping'],
    execute(client, message) {
        message.channel.send(`Latency is **${client.ws.ping}ms**, which was last checked ${millisecond(Date.now()-client.ws.shards.first().lastPingTimestamp, {long: true})} ago ✨`);
    },
};