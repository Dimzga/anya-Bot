let handler = async (m, { conn, isbotAdmin, isAdmin, isOwner }) => {
	if(isGroup) throw `in the group`
    if(isOwner) throw false 
    if(isbotAdmin) throw 'cant'
    if (m.fromMe) throw 'Nggk'
    if (isAdmin) throw 'Even though Iam already an admin'
  await conn.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "demote" // replace this parameter with "remove", "demote" or "promote"
)
}
handler.help = ['down.']
handler.tags = ['owner']
handler.command = /^(down.|member.)$/i
module.exports = handler
