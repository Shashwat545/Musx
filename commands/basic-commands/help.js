const {MessageEmbed}=require('discord.js');
module.exports={
    name:'help',
    aliases:[],
    utilisation:'{prefix}help',
    execute(client, message){
        const msg=new MessageEmbed();
        msg.setColor('BLUE');
        msg.setAuthor({name:'Shashwat Singh', iconURL:'https://github.com/Shashwat545.png', url:'https://github.com/Shashwat545'});
        msg.setDescription(`The commands listed below can be used to control the bot.\nJust make sure to use a '!' before sending each command.\nExample - !latency`);
        const cmds=client.commands;
        msg.addField(`Commands active - ${cmds.size}`, cmds.map(x=>`\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y=>y).join(', ')})\`` : '\`'}`).join(' | '));
        msg.setTimestamp();
        msg.setFooter({text:`Musx is made with ❤️ by Shashwat`, iconURL: client.user.displayAvatarURL()});
        return message.channel.send({embeds:[msg]});
    },
};