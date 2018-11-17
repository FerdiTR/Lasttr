const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    message.channel.sendCode("LasTCopper Yardım Komutları", `
LasTCopper Botu

t!yumruh-at
t!avatar
t!bilgi
t!istatistik
t!kanalbilgi
t!ping
t!oylama
t!sunucu-resmi
t!sunucu-bilgi
******Admin******
t!kick
t!temizle

`);
};

module.exports.help = {
  name: "yardım"
}
