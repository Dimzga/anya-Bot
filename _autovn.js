let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {

let vn = [
'anjay',
'ara-ara',
'ara-ara-cowok',
'ara-ara2',
'arigatou',
'assalamualaikum',
'asu',
'ayank',
'aku-ngakak',
'bacot',
'bahagia-aku',
'baka',
'bansos',
'beat-box',
'beat-box2',
'biasalah',
'bidadari',
'bot',
'buka-pintu',
'canda-anjing',
'cepetan',
'cuekin-terus',
'daisuki-dayo',
'daisuki',
'dengan-mu',
'gaboleh-gitu',
'gak-lucu',
'gamau',
'gay',
'gelay',
'gitar',
'gomenasai',
'hai-bot',
'hampa',
'hayo',
'hp-iphone',
'i-like-you',
'ih-wibu',
'india',
'karna-lo-wibu',
'kiss',
'kontol',
'ku-coba',
'maju-wibu',
'makasih',
'mastah',
'nande-nande',
'nani',
'ngadi-ngadi',
'nikah', 'nuina',
'onichan',
'owner-sange',
'ownerku',
'pak-sapardi',
'pale',
'pantek',
'pasi-pasi',
'punten',
'sayang',
'siapa-sih',
'sudah-biasa',
'summertime',
'tanya-bapak-lu',
'to-the-bone',
'wajib',
'waku',
'woi',
'yamete',
'yowaimo',
'yoyowaimo' 
  ] 
  for (let v of vn) {
    if (budy.toLowerCase().includes(v)) {
      let med = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${v}.mp3`
      conn.sendMessage(m.chat, {
        audio: { url: med },
        mimetype: 'audio/mp4',
        ptt: true
      },{ quoted: m})
    }
  }

}
module.exports = handler
