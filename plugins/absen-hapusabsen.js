let handler = async (m, { conn, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, `tidak ada absen berlangsung!`, wm, 'mulai absen', `.mulaiabsen`, m)
    delete conn.absen[id]
    m.reply(`berhasil menghapus sesi absen!`)
}
handler.help = ['-absen']
handler.tags = ['1absen']
handler.command = /^(deleteabsen)$/i

module.exports = handler