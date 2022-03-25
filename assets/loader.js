//This file loads up all the commands and sets up the bot
const {readdirSync}=require('fs');
const {Collection}=require('discord.js');
client.commands=new Collection();
const interactions=readdirSync('./assets/interactions/').filter(file=>file.endsWith('.js'));
console.log(`Loading interactions....`);
for(const file of interactions) {
    const interaction=require(`../assets/interactions/${file}`);
    console.log(`• Loaded interaction ${file.split('.')[0]}`);
    client.on(file.split('.')[0], interaction.bind(null, client));
    delete require.cache[require.resolve(`../assets/interactions/${file}`)];
};
console.log(`Loading commands....`);
readdirSync('./commands/').forEach(dirs=>{
    const commands=readdirSync(`./commands/${dirs}`).filter(files=>files.endsWith('.js'));
    for(const file of commands) {
        const command=require(`../commands/${dirs}/${file}`);
        console.log(`• Loaded command ${command.name.toLowerCase()}`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
    };
});