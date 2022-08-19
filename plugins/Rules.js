let handler = async m => {
const bg = "https://telegra.ph/file/64295f11b9528f8caaf4b.mp4"


conn.sendMessage(m.chat, {
video: { url: bg },
caption: `
   ❖❯────【Rules】────❮❖

1. *JANGAN SPAM HIDETAG GK GUNA KALO UDH LEWAT 5 KALI[BANNED]*
2. *JANGAN SPAM BOT*
3. *HARGAI OWNER*
4. *JANGAN NGEJEK LAH AJG*
5. *DILARANG TELPON BOT*
6. *KALO MO INVIT BOT IZIN DULU*
*Sekian Terima kasih*
`})
}
handler.tags = ["info"]
handler.help = ["rules"]
handler.command = /^(rules)$/i
handler.mods = false
handler.owner = false

module.exports = handler
