import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)

let flaaa2 =[
'https://telegra.ph/file/a463b01147a3379d09fc6.jpg',
'https://telegra.ph/file/d368a50703e77d972118b.jpg',
'https://telegra.ph/file/f867d41415024d621b651.jpg']
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Database Saat Ini ${totalreg} User*\n*Terdaftar Saat ini ${rtotalreg} User*`
    await /*conn.sendButtonLoc(m.chat, await(await require('node-fetch')(fla + `${command}`)).buffer(), kon, wm, 'Menu', usedPrefix + 'menu', m)*/
    conn.sendButtonImg(m.chat, `${pickRandom(flaaa2)}`, ' ', `${bottime}`,'Speed', `${usedPrefix}speed`, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    description: sgc,
    title: "Jangan Lupa Bernafas",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
