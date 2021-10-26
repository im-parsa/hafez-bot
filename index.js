const fs = require("fs"),
    Discord = require("discord.js"),
    { prefix, token } = require("config.json"),

    bot = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" } }})

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>
{
  if (err) console.log(err);
  let file = files.filter((f) => f.split(".").pop() === "js");

  if (file.length <= 0)
  {
    console.log("Couldn't find commands.");
    return;
  }

  file.forEach((f) =>
  {
    let props = require(`./commands/${f}`);
    console.log(`| ✅ ${f} loaded! `);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach((alias) =>
    {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("ready", async () =>
{
  console.log(`Logged in as ${bot.user.tag}!`);

  await bot.user.setPresence({status: "idle"});

  setInterval(() =>
  {
    bot.user.setActivity(`📔 !help | ${bot.guilds.cache.size} Guilds`, { type: "WATCHING" });
  }, 5000);
});

bot.on("message", async message =>
{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content.slice(prefix.length).trim().split(/ +/g),
      cmd = args.shift().toLowerCase(),
      commandFile;

  if (bot.commands.has(cmd))
  {
    commandFile = bot.commands.get(cmd);
  }
  else if (bot.aliases.has(cmd))
  {
    commandFile = bot.commands.get(bot.aliases.get(cmd));
  }

  if (!message.content.startsWith(prefix)) return;

  try
  {
    commandFile.run(bot, message, args);
  }
  catch (e)
  {
    console.log(e)
  }
});

bot.on("message", async message =>
{
  const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>)\\s*`),

      embed = new Discord.MessageEmbed()
          .setColor('#fffff0')
          .setTitle(`پری فیکس من ❗ ${prefix}\` است`);

  if (prefixRegex.test(message.content)) await message.channel.send(embed);

});

process.on("unhandledRejection", (reason, promise) =>
{
  try
  {
    console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
  }
  catch
  {
    console.error(reason);
  }
});

bot.login(token);
