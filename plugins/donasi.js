const qrku = "https://telegra.ph/file/6c943fc155456e5cc30de.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Owner ❌
│ • Mods : ❌
╰────
╭─「 *NOTE* 」
│ > Donasi kalo mau🗿 https://saweria.co/BANGDIMZ
│ > IZIN KE GW KALO MO CULIK
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
