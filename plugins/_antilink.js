let handler = m => m

const linkRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "Admin mah bebas ygy :'v" : `\n\nlink group terdeteksi dan ${global.namabot} bukan admin jadi tidak bisa ngekick!`}`)
    if (isBotAdmin) {
      m.reply(` *「 ANTILINK 」* \n\nLink Group Terdeteksi, bye Kamu Akan Di Kick!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler