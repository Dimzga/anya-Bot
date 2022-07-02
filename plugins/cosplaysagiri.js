let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('tunggu...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplaysagiri.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, cosser, 'istri gw cosplay 😳', 'By Lui', 'Next', `.cosplaysagiri`, m, false)
}
handler.help = ['cosplaysagiri']
handler.tags = ['anime']
handler.command = /^(cosplaysagiri)$/i

module.exports = handler