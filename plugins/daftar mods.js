const bg = "https://telegra.ph/file/6c943fc155456e5cc30de.jpg"
let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Menu mods 」*
│
│•> .warn [username]
│•> .unwarn [username]
 | •> .restart
 | •> .bc [text]
 | •
╰────

`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(mods1)$/i
handler.mods = false
handler.owner = false

module.exports = handler
