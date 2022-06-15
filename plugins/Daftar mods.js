const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let handler = async (m, { jid, conn, usedPrefix, command, isOwner }) => {
let fetch = require('node-fetch')
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `${readMore}
╭─「 Menu mods🔥 」
│
│• .warn [username]
│• .unwarn [username]
 | • .restart
 | •.bc [text]
 | •.sefl 
╰────


`.trim()
    conn.sendButtonLoc(m.chat, await(await fetch(fla + `${command}`)).buffer(), caption, wm, `Menu`, `${usedPrefix}menu`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) }, mentions: await conn.parseMention(caption) })
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^list?ban(ned)?|ban(ned)?list?|daftarban(ned)?$/i

handler.owner = true
handler.mods = true

module.exports = handler
