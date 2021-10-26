const Discord = require("discord.js");

module.exports.run = async (bot, message) =>
{
    const embed = new Discord.MessageEmbed()
        .setTitle("📔 **صفحه اینوایت** 📔")
        .setThumbnail(bot.user.displayAvatarURL())
        .addField(
            "لینک اینوایت من 🔗",
            "[Elite Hafez Invite](https://discord.com/api/oauth2/authorize?client_id=730584726401843221&permissions=2163534400&scope=bot)"
        )
        .addField(
            "لینک اینوایت سرور پشتیبانی 🔗",
            "[Elite Server Invite](https://discord.gg/RUrks4JqW6)"
        )
        .setColor("#fffff0")
        .setFooter(
            " : درخواست شده توسط " + message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
        );

    await message.channel.send(embed);
};

module.exports.help =
    {
        name: "invite",
        aliases: ["i"]
    };
