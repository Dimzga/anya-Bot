let fetch = require("node-fetch")
async function handler(m, {command}) {
m.reply('_Loading..._')
let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/${command}.mp3`)
json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
}

handler.help = ['anjay', 'ara-ara', 'ara-ara-cowok', 'ara-ara2', 'arigatou', 'assalamualaikum', 'asu', 'ayank', 'aku-ngakak', 'bacot', 'bahagia-aku', 'baka', 'bansos', 'beat-box', 'beat-box2', 'biasalah', 'bidadari', 'bot', 'buka-pintu', 'canda-anjing', 'cepetan', 'china', 'cuekin-terus', 'daisuki-dayo', 'daisuki', 'dengan-mu', 'gaboleh-gitu', 'gak-lucu', 'gamau', 'gay', 'gelay', 'gitar', 'gomenasai', 'hai-bot', 'hampa', 'hayo', 'hp-iphone', 'i-like-you', 'ih-wibu', 'india', 'karna-lo-wibu', 'kiss','kontol', 'ku-coba', 'maju-wibu', 'makasih', 'mastah', 'menu', 'nande-nande', 'nani', 'ngadi-ngadi', 'nikah', 'nuina', 'onichan', 'owner-sange', 'ownerku', 'pak-sapardi', 'pale', 'pantek', 'pasi-pasi', 'punten', 'sayang', 'siapa-sih', 'sudah-biasa', 'summertime', 'tanya-bapak-lu', 'to-the-bone', 'wajib', 'waku', 'woi', 'yamete', 'yowaimo', 'yoyowaimo']
handler.tags = ['vn']
handler.command = /^(anjay|ara-ara|ara-ara-cowok|ara-ara2|arigatou|assalamualaikum|asu|ayank|aku-ngakak|bacot|bahagia-aku|baka|bansos|beat-box|beat-box2|biasalah|bidadari|bot|buka-pintu|canda-anjing|cepetan|china|cuekin-terus|daisuki-dayo|daisuki|dengan-mu|gaboleh-gitu|gak-lucu|gamau|gay|gelay|gitar|gomenasai|hai-bot|hampa|hayo|hp-iphone|i-like-you|ih-wibu|india|karna-lo-wibu|kiss|kontol|ku-coba|maju-wibu|makasih|mastah|menu|nande-nande|nani|ngadi-ngadi|nikah|nuina|onichan|owner-sange|ownerku|pak-sapardi|pale|pantek|pasi-pasi|punten|sayang|siapa-sih|sudah-biasa|summertime|tanya-bapak-lu|to-the-bone|wajib|waku|woi|yamete|yowaimo|yoyowaimo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


