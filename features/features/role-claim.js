const firstMessage = require("@util/first-message")

module.exports = (client) => {
  const channelId = "781698793820651530"

  const getEmoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    "💊" : "Blood Eagles",
    "⚙️" : "Brotherhood of Steel",
    "🦋" : "Cult of the Mothman",
    "🙊" : "Enclave",
    "💰" : "Mercenaries",
    "🔫" : "Raiders",
    "🔧" : "Scavvers",
    "🐮" : "Traders"
  }

  const reactions = []

  let emojiText = 'Use the reactions on this message to opt-in and opt-out of roles. This will help connect you with roleplayers who have similar characters.\n\n'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(key)

    const role = emojis[key]
    emojiText += `${key} for ${role}\n\n`
  }

  firstMessage(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '780232518775078953') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}