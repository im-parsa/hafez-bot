const { MessageEmbed } = require("discord.js");
const os = require("os");

module.exports.run = async (client, message) =>
{
  const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("📔 **آمار بات الایت حافظ** 📔")
      .setFooter(
          " : درخواست شده توسط " + message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
      )
      .setColor("#fffff0")
      .addFields(
          {
            name: "تعداد سرور های فعال 🌐",
            value: `فعال در **.${client.guilds.cache.size}.** سرور`,
            inline: true
          },
          {
            name: "تعداد چنل های فعال 📺",
            value: `فعال در **.${client.channels.cache.size}.** چنل`,
            inline: true
          },
          {
            name: "تعداد ممبر های فعال 👥",
            value: `فعال برای **.${client.users.cache.size}.** ممبر`,
            inline: true
          },
          {
            name: "پینگ ربات ⏳",
            value: `**.${Math.round(client.ws.ping)}ms.**`,
            inline: true
          },
          {
            name: "سازنده 👨‍💻",
            value: "**-its^Parsa^#3222 **",
            inline: true
          },

          {
            name: "⏱ Uptime",
            value: os.uptime(),
            inline: true
          },
          {
            name: "💻 Memory Usage",
            value: os.freemem(),
            inline: true
          },
          {
            name: "💻 Platform",
            value: os.platform() + " " + `(${os.version()})`,
            inline: true
          },
          {
            name: "💻 CPU",
            value: os.cpus()[0].model,
            inline: true
          }
      );

  await message.channel.send(embed);
};

module.exports.help =
    {
      name: "botInfo",
      aliases: ["bi"]
    };
