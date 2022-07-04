let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('_Proses..._')
  let res = `https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i

module.exports = handler
