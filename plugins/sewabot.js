let handler = async m => {
const bg = "https://telegra.ph/file/6c943fc155456e5cc30de.jpg"

let krtu = `Kartu Intro`
m.reply(`
   ❖❯────【Sewa】────❮❖
│       *「 Sewa bot 」*
│
│•> .1. Grup / 30 Har*
│•> .Rp. 15.000 Ovo
 | •> .Rp. 15.000 Pulsa
 | •> 2. moderator + MODERATOR 30 Hari
 | •>Rp. 20.000 Ovo
 | •>Rp. 20.000 Pulsa
 | •> https://wa.me/qr/7Y5SVWOXU7FZP1
 | •> chat owner : 083894556422
╰────

`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(sewa)$/i
handler.mods = false
handler.owner = false

module.exports = handler
