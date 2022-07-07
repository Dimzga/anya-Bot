let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
const bg = "https://telegra.ph/file/e5847d1c9df8caa6bc6b7.mp4"
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
