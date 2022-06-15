let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/loli.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh lolinya @${m.sender.split(`@`)[0]}`, wm,`Next`, `${usedPrefix}${command}`, m, {jpegThumbnail: await(await fetch(cita)).buffer(), mentions:[m.sender] })
}
handler.tags = ['anime']
handler.help = ['loli']
handler.command = /^(loli)$/i

handler.register = true
handler.limit = false

module.exports = handler