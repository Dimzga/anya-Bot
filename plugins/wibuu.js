const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

let thumb = "https://telegra.ph/file/66ee3fc79c0914b47598f.png"
let stiker = await sticker(null, thumb, global.wm, global.author)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}

handler.customPrefix = /wibu|vvibu|Wibu|WIBU|VVIBU|VVibu/
handler.command = new RegExp

module.exports = handler
