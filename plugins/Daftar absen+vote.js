let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let ar = ['.loli']
  let ras = `Halo Kak @${m.sender.split('@')[0]}`
  let sel = `Menu Absen! Versi 1.0.0`
  let rs = `Pilih Disini`
  const sections = [ {
           title: `Silahkan Pilih absen! !`,
           rows: [
              {title: `🌸Absen`, rowId: `${usedPrefix} cekabsen`},
              {title: `🌸mulai absen`, rowId: `${usedPrefix} start`},
              {title: `🌸Apus absen`, rowId: `${usedPrefix} deleteabsen`},
              {title: `🌸Afk kamu`, rowId: `${usedPrefix} afk`},
           ]
       }    
  ]
  const listMessage = {
           text: sel,
           mentions: [m.sender],
           footer: wm,
           title: ras,
           buttonText: rs,
           sections
  }
  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let res = await fetch(API('https://some-random-api.ml', '/animal/' + args[0]))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
  conn.sendBI(m.chat, ` *「 Absen」*\n\n*Result :* ${text}\n\n` + json.fact, wm, json.image, [['Next', usedPrefix + command + ' ' + text]], m)
}
handler.tags = ['absen11']
handler.command = /^(beban)$/i

handler.desc = ['Menampilkan gambar hewan beserta keterangannya!']

module.exports = handler
