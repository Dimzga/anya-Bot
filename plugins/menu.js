const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let moment = require('moment-timezone')
let tags = {
  'main': 'MENU UTAMA',
  'game': 'MENU GAME',
  'rpg': 'MENU RPG',
  'xp': 'MENU EXP',
  'premium': 'MENU PREMIUM',
  'group': 'MENU GROUP',
  'absen': 'MENU ABSEN',
  'vote': 'MENU VOTE',
  'owner': 'MENU OWNER',
  'islam': 'MENU ISLAMI',
  'quran': 'MENU ALQURAN',
  'fun': 'MENU FUN',
  'sticker': 'MENU CONVERT',
  'maker': 'MENU MAKER',
  'github': 'MENU GITHUB',
  'internet': 'INTERNET',
  'asupan': 'ASUPAN',
  'kerang': 'MENU KERANG',
  'anime': 'MENU ANIME',
  'downloader': 'DOWNLOADER',
  'nsfw': 'MENU MININGDOSA',
  'tools': 'MENU TOOLS',
  'advanced': 'ADVANCED',
  'quotes': 'MENU QUOTES',
  'info': 'MENU INFO',
  'nulis': 'MENU NULIS',
  
}

const defaultMenu = {
  before: `
╭─────═[ *INFO PENGGUNA* ]═─────⋆
│╭───────────────···
┴│▸ *Name:* %name
⬡│▸ *Premium:* %prems
⬡│▸ *Age:* %age
⬡│▸ *Limit:* %limit
⬡│▸ *Money:* %money
⬡│▸ *Role:* %role
⬡│▸ *Level:* %level [%xp4levelup]
⬡│▸ *Xp:* %exp / %maxexp
┬│▸ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ *TODAY* ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name!*
⬡│▸ *Tanggal:* %week %weton, %date
⬡│▸ *Tanggal Islam:* %dateIslamic
┬│▸ *Waktu:* %time
│╰────────────────···
┠─────═[ *BOT INFO* ]═─────⋆
│╭────────────────···
┴│▸ *Nama Bot:* %me
⬡│▸ *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
⬡│▸ *Prefix:* [ ! ]
⬡│▸ *Speed:* 9999 ms
⬡│▸ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
⬡│▸ *Platform:* Nokia
⬡│▸ *Uptime:* %uptime (%muptime)
┬│▸ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────
%readmore`.trimStart(),
  header: '│╰────────────────···\n┠─────═[ *%category* ]═─────⋆\n│╭────────────────···\n',
  body: '⬡│» %cmd %islimit %isPremium',
  footer: '┬│\n│╰────────────────···\n╰──────────═┅═──────────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
      
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role, prem } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = moment.tz('Asia/Jakarta').format('HH')
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      conn.send2But(m.chat, `✧───────···[ Dashboard ]···──────✧`, text.trim(), 'pembuat😱', `.owner`, 'sc😅👆', `.sc`, m)         
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi 🌄"
  }
  if (time > 10) {
    res = "Selamat siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat malam 🌙"
  }
  return res
}