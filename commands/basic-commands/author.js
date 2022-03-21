const {MessageEmbed}=require('discord.js');
module.exports={
    name:'author',
    aliases:[],
    utilisation:'{prefix}author',
    execute(client, message){
        const msg=new MessageEmbed();
        msg.setColor('GOLD');
        msg.setAuthor({name:'Shashwat Singh', iconURL:'https://github.com/Shashwat545.png', url:'https://github.com/Shashwat545'});
        msg.setDescription(`Hey there this is Shashwat Singh and I'm currently\nstudying at IIT BBS (as of writing this code lol).\nThanks for using this bot and feel free to drop me\nany suggestions you might have. Connect with me on GitHub.`);
        return message.channel.send({embeds:[msg]});
    },
};