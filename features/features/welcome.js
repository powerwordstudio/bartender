const Discord = require('discord.js');

module.exports = (client) => {
  const welcomeChannelId = "781675853234176010"
  const rulesChannelId = "781586935004921926"

  client.on('guildMemberAdd', (member) => {

    var welcometext = [
      `Gary? Ha ha, Gary.`,
      `You are not to question my orders! When I say jump, you jump! When I say fight, you fight! When I tell you to read ${member.guild.channels.cache.get(rulesChannelId).toString()}, then you will certainly read it! Have I made myself clear, <@${member.id}>?`,
      `You will be faced with many challenges throughout your lifetime, <@${member.id}>, and the most difficult of these will be dealing with your fellow man. The ${member.guild.channels.cache.get(rulesChannelId).toString()} might help.`,
      `The Devil walks among us, <@${member.id}>. Oh, he may look like us, but he calls Hell home. He is legion, and his deeds are legend.`,
      `Let's get the other bit of politeness taken care of, <@${member.id}>, shall we? What the bloody, bloody, bloody hell are you doing here when you could be reading ${member.guild.channels.cache.get(rulesChannelId).toString()}?`,
      `All this time, and the first person to walk through my door is <@${member.id}>.`,
      `They asked me how well I understood theoretical physics. I said I had a theoretical degree in physics. They said welcome aboard.`
    ]

    const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Welcome to the Trusted Frame, ${member.user.username}`)
    .setAuthor(`<@${member.id}>`)
    .setDescription(`Texty text text`)
    .setThumbnail(`${member.user.displayAvatarURL()}`)

    const channel = member.guild.channels.cache.get(welcomeChannelId)
    channel.send(embed)
  })
}