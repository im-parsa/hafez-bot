const Discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (bot, message) =>
{
  const number_random = Math.floor(Math.random() * 495),

      getInfo = async () =>
      {
        let response = await axios.get(`https://api.falehafez.org/`);
        return response.data;
      },

      data = await getInfo(),

      poem = `${data.poem[0]} — ${data.poem[1]}\n> ${data.poem[2]} — ${data.poem[3]}\n> ${data.poem[4]} — ${data.poem[5]}\n> ${data.poem[6]} — ${data.poem[7]}\n> ${data.poem[8]} — ${data.poem[9]}\n> ${data.poem[10]} — ${data.poem[11]}`,

      embed1 = new Discord.MessageEmbed()
          .setColor("#fffff0")
          .setDescription(`📔 **(${number_random}) غزلیات حافظ** 📔`)
          .addField(
              "**: شعر 📔**",
              `> ${poem}`
          )

          .setImage(
              "https://cdn.discordapp.com/attachments/776425421968244768/832315187830849576/Hafez.jpg"
          )
          .setFooter(
              " : درخواست شده توسط " + message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
          );
  await message.channel.send(embed1);

};

module.exports.help =
    {
  name: "ghazal",
  aliases: ["poem"]
};
