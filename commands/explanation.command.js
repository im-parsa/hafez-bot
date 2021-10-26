const axios = require("axios"),
    Discord = require("discord.js");


module.exports.run = async (bot, message) =>
{
  const numberRandom = Math.floor(Math.random() * 495),

      getInfo = async () =>
      {
        let response = await axios.get(`https://api.falehafez.org/`);
        return response.data;
      },

      data = await getInfo(),

      poem = `${data.poem[0]} — ${data.poem[1]}\n> ${data.poem[2]} — ${data.poem[3]}\n> ${data.poem[4]} — ${data.poem[5]}`,

      explanation = `${data.explanation}`,

      embed = new Discord.MessageEmbed()
          .setColor("#fffff0")
          .setDescription(`📔 **(${numberRandom}) فال حافظ** 📔`)
          .addField(
              "**: شعر 📔**",
              `> ${poem}`
          )
          .addField("**: تعبیر 📔**", `> ${explanation}`)
          .setImage(
              "https://cdn.discordapp.com/attachments/776425421968244768/832315187830849576/Hafez.jpg"
          )
          .setFooter(
              " : درخواست شده توسط " + message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
          );

  await message.channel.send(embed);
};

module.exports.help =
    {
      name: "omen",
      aliases: ["fal"]
    };
