let handler = async (m, { conn, usedPrefix, command }) => {
let res = await require('node-fetch')('https://api.waifu.pics/sfw/waifu')')
let arr = await res.json()
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh waifunya @${m.sender.split(`@`)[0]}`, wm,`Next`, `${usedPrefix}${command}`, m, {jpegThumbnail: await(await fetch(cita)).buffer(), mentions:[m.sender] })
}
handler.tags = ['anime']
handler.help = ['wibu']
handler.command = /^(wibu)$/i

//handler.register = true
//handler.limit = false

module.exports = handler