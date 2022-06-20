let handler = async (m, { conn, command }) => {
const bg = "https://telegra.ph/file/6c943fc155456e5cc30de.jpg"

let krtu = `Kartu Intro`
m.reply(`
.akira

.akiyama

.gawrgura

.anna

.asuna

.ayuzawa

.boruto

.chiho

.chitoge

.deidara

. erza

.elaina

.eba

.emilia

.hestia

.hinata

.inori

.isuzu

.itachi

.itori

.kaga

.kagura

.kaori

.keneki

.kotori

.kurumi

.madara

.mikasa

.miku

.minato

.naruto

.nezuko

.sagiri

.sasuke

.sakura


/konachan <query>

`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(animeall)$/i
handler.mods = false
handler.owner = false

module.exports = handler
