let handler = async(m,{text, conn}) => {
let supa = 'https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=7b389b5e346e7b9181783e80'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['gura']
handler.tags = ['anime']
handler.command = /^(gura)$/i

module.exports = handler
