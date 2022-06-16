let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let ar = ['.loli']
  let ras = `Halo Kak @${m.sender.split('@')[0]}`
const bg = "https://telegra.ph/file/6c943fc155456e5cc30de.jpg"
  let sel = `Pilih Nama Waifu Versi 1.5.0`
  let rs = `Pilih Disini`
  const sections = [ {
           title: `Silahkan Pilih Waifu Favorit-mu!`,
           rows: [
              {title: `🌸loli`, rowId: `${usedPrefix} loli`},
              {title: `🌸Sagiri`, rowId: `${usedPrefix} sagiri`},
              {title: `🌸Neko`, rowId: `${usedPrefix} neko`},
              {title: `🌸Ayank kamu`, rowId: `${usedPrefix} istri`},
              {title: `🌸Megumin`, rowId: `${usedPrefix} megumin`},
              {title: `🌸~Anime all~`, rowId: `${usedPrefix} .akira|akiyama|anna|asuna|ayuzawa|boruto|chiho|chitoge|deidara|erza|elaina|eba|emilia|hestia|hinata|inori|isuzu|itachi|itori|kaga|kagura|kaori|keneki|kotori|kurumi|madara|mikasa|miku|minato|naruto|nezuko|sagiri|sasuke|sakura|cosplay`},
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
  conn.sendBI(m.chat, ` *「 Waifu」*\n\n*Result :* ${text}\n\n` + json.fact, wm, json.image, [['Next', usedPrefix + command + ' ' + text]], m)
}
handler.tags = ['waifu']
handler.command = /^(waifu)$/i

handler.desc = ['Menampilkan gambar hewan beserta keterangannya!']

module.exports = handler
