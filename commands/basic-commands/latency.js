const millisecond=require('ms');
module.exports={
    name: 'latency',
    aliases: ['ping'],
    utilisation: '{prefix}latency',
    execute(client, message) {
        message.channel.send(`Latency is **${client.ws.ping}ms**, which was checked ${ms(Date.now()-client.ws.shards.first().lastPingTimestamp, {long: true})} ago ✨`);
    },
};