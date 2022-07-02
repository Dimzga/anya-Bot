let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplayloli.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, cosser, 'istri gw cosplay 😳', 'By Lui', 'Next', `.cosplayloli`, m, false)
}
handler.help = ['cosplayloli']
handler.tags = ['anime']
handler.command = /^(cosplayloli)$/i

module.exports = handler