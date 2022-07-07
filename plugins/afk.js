let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
let bg = await (await fetch('https://telegra.ph/file/46a2634596ce1a9e78d8c.mp4')).buffer()
    await conn.send3ButtonVid(m.chat, bg, text.trim(),"
    user.afk = + new Date
    user.afkReason = text
    conn.sendButton(m.chat, `
${conn.getName(m.sender)} sekarang AFK${text ? ': ' + text : ''}
`, wm, `Menu`, `${usedPrefix}menu`, m)
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
