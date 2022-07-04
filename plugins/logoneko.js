let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i

module.exports = handler



