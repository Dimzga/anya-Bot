let handler = async (m, { conn, usedPrefix }) => {
const bg = "https://telegra.ph/file/64295f11b9528f8caaf4b.mp4"


conn.sendMessage(m.chat, {
video: { url: bg },
	await conn.fetchBlocklist().then(async data => {
		let txt = `*「  Daftar Nomor Yang Diblacklist  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		for (let i of data) {
			txt += `├ @${i.split("@")[0]}\n`
		}
		txt += "└────"
		return m.reply(txt)
	}).catch(err => {
		console.log(err);
		throw 'tidak ada yang diblokir!'
	})
}

handler.tags = ["info"]
handler.help = ["listblock"]
handler.command = /^(list(blo(ck|k)?)?)$/i

module.exports = handler
