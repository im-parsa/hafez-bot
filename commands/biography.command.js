const Discord = require("discord.js");


module.exports.run = async (bot, message) =>
{
  const embed = new Discord.MessageEmbed()
      .setColor("#fffff0")
      .setDescription(`📔 **زندگی نامه حافظ** 📔`)
      .addField(
          "**: زندگی نامه 📔**",
          `> خواجه شمس‌ُالدّینْ محمّدِ بن بهاءُالدّینْ محمّدْ حافظ شیرازی (زادهٔ ۷۲۷ هجری قمری – درگذشتهٔ ۷۹۲ هجری قمری در شیراز)، ملقب به لِسان‌ُالْغِیْب، تَرجُمانُ الْاَسرار، لِسان‌ُالْعُرَفا و ناظِم‌ُالاُولیاء، شاعر سدهٔ هشتم هجری ایران است. بیش‌تر شعرهای او غزل هستند که به غزلیات شهرت دارند.`
      )
      .addField(': تولد 📔', `۷۰۶`)
      .addField(': فوت 📔', `۷۶۹`)
      .addField(': دیوان اشعار 📔', `دیوان حافظ`)
      .addField(': محل خاکسپاری 📔', `شیراز`)

      .setFooter(
          " : درخواست شده توسط " + message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
      );

  await message.channel.send(embed);
};

module.exports.help =
    {
      name: "biography",
      aliases: ["zendegiName"]
    };
