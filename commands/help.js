const { MessageEmbed } = require('discord.js');


module.exports = {
  name: 'help',
  aliases: ['h'],
  description: 'Returns command list help',
  execute(message) {
    const commands = message.client.commands.array();

    const helpEmbed = new MessageEmbed()
      .setTitle(message.client.user.username)
      .setDescription('Information for every command')
      .setColor('#19e0ff');

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ''}**`,
        `${cmd.description}`,
        true,
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  },
};