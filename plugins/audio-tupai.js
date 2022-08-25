let handler = async m => {
const bg = "https://telegra.ph/file/6868ed0fccc6ecb9d8731.jpg"

let krtu = `Kartu Intro`
conn.sendMessage(m.chat, {
image: { url: bg },
caption: `
   ❖❯──【TIKTOM】──❮❖
     
   *「 TIKTOK OWNER 」*

INI KAK AKUN TIKTOK OWNER KU 🥶
 Kalo mo follow , follow aja😁☝
chat owner : 083894556422

`})
}
handler.command = /^(akun)$/i
handler.mods = false
handler.owner = false

module.exports = handler
