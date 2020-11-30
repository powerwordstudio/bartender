require("module-alias/register")

const path = require("path")
const commando = require("discord.js-commando")

const config = require("@root/config.json")
const loadFeatures = require('@root/features/load-features')

const client = new commando.CommandoClient({
  owner: "751169133625868438",
  commandPrefix: config.prefix,
  disableEveryone: true
})

client.on("ready", async () => {
  console.log("The client is ready!")

  client.registry
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"))

  loadFeatures(client)
})

client.login(config.token)