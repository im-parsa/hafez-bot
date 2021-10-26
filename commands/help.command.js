const Discord = require("discord.js"),
    { prefix } = require("../config.json");


module.exports.run = async (bot, message) =>
{
  const embed = new Discord.MessageEmbed()
      .setThumbnail(bot.user.displayAvatarURL())
      .setTitle("📔 **صفحه راهنمایی** 📔")
      .setDescription(
          `**: فال حافظ 📔**\n \`${prefix}hafez\`\n\n **: غزلیات حافظ 📔**\n \`${prefix}ghazal\` \n\n **: عکس های حافظ 📔**\n \`${prefix}picture\` \n\n **: زندگی نامه حافظ 📔**\n \`${prefix}biography\` \n\n**: اطلاعات بات 🤖**\n \`${prefix}botInfo\` \n\n**: اینوایت بات 🔗**\n \`${prefix}invite\``)
      .setFooter(
          " : درخواست شده توسط" + message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
      )

      .setColor("#fffff0");

  await message.channel.send(embed);
};

module.exports.help =
    {
      name: "help",
      aliases: ["h"]
    };
