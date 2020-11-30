module.exports = (client) => {
  const channelId = "782635266723807273"

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    if (channel) {
      channel.setName(`Discord members: ${guild.memberCount.toString()}`)
    }
  }

  client.on("guildMemberAdd", (member) => updateMembers(member.guild))
  client.on("guildMemberRemove", (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get("762209593799082014")
  updateMembers(guild)
}