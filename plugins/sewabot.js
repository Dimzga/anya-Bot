let handler = async m => {
const bg = "https://telegra.ph/file/64295f11b9528f8caaf4b.mp4"


conn.sendMessage(m.chat, {
video: { url: bg },
caption: `
   ❖❯────【Sewa】────❮❖
│       *「 Sewa bot 」*
│
│•> .1. Grup / 30 Hari
│•> .Rp. 10.000 Ovo
 | •> .Rp. 10.000 Pulsa
 | •> 2. GROUP + MODERATOR 30 Hari
 | •>Rp. 15.000 Ovo
 | •>Rp. 15.000 Pulsa
 | •> https://wa.me/qr/7Y5SVWOXU7FZP1
 | •> chat owner : 083894556422
╰────

`})
}
handler.command = /^(sewa)$/i
handler.mods = false
handler.owner = false

module.exports = handler
