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

        poem = `${data.poem[0]} — ${data.poem[1]}`,

        repliesPic =
            [
                "https://cdn.discordapp.com/attachments/760896469023850588/832576634489929728/782482961-talab-org.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832576633667715112/1.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832576633901678602/b5759593fdad5a8d.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832576634078625832/ef6cdaaf78ea9696.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832576634279428136/Hamgardi_0349zvzbc89_resize.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832577287551451177/1660401.jpg",
                "https://cdn.discordapp.com/attachments/760896469023850588/832577287693533194/e67ebce5d3751d45.png"
            ],

        ranNum = Math.floor(Math.random() * 7),

        image = repliesPic[ranNum],

        embed = new Discord.MessageEmbed()
            .setColor("#fffff0")
            .setDescription(`📔 **(${numberRandom}) عکس حافظ** 📔`)
            .addField(
                "**: شعر 📔**",
                `> ${poem}`
            )
            .setImage(image)
            .setFooter(
                " : درخواست شده توسط " + message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
            );

    await message.channel.send(embed);
};

module.exports.help =
    {
        name: "",
        aliases: ["p"]
    };
