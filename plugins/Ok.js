const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

let thumb = "https://telegra.ph/file/f61a7c96f3f86b6c5214f.png"
let stiker = await sticker(null, thumb, global.wm, global.author)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
