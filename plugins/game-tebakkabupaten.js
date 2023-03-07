import fetch from 'node-fetch'
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebakkabupaten[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Kabupaten Apakah In?
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}tebu Untuk Bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '', 'Bantuan', '.tebu', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.sendBut(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.title}*`, '', 'Main Lagi', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

export default handler
