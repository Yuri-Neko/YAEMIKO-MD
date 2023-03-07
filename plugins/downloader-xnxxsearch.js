import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
  if (!text) throw `Mau Cari Apa?`
  let res = await fetch(`https://api.itsrose.site/dewasa/xnxx/search?query=${text}&apikey=itsroseUnlimitedLimit`)
  let res2 = await res.json()
  if (res2.status != true) throw `Tidak Ditemukan.`
  let cap = `*Hasil Pencarian Dari ${text}*\n`
  for (let json of res2.result) {
   cap += ` • *Title:* ${json.title} 
• *Views:* ${json.views}
• *Quality:* ${json.quality}
• *Duration:* ${json.duration}
• *Url:* ${json.url}
`
  	}
  conn.sendButton(m.chat, cap, author, [['\nKakek Gw Pemain Jav', 'huuu']], m)
}
handler.help = ['xnxxsearch']
handler.command = /^(xnxxsearch)$/i
handler.tag = ['internet']
handler.premium = true

export default handler

// By Ekuzika
// Don't remove this wm :v