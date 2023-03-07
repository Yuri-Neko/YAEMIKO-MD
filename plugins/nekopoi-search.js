import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await fetch(`https://api.itsrose.site/dewasa/nekopoi/search?query=${text}&apikey=itsroseUnlimitedLimit`)
  let res2 = await res.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n\n`
  for (let json of res2.result) {
      cap += `• *Title:* ${json.title}\n• *Code:* ${json.id}`
  	}
  conn.sendButton(m.chat, cap, wm, await( await fetch(res2.result[0].image)).buffer(), [['\nJadi Sange :v', 'huuu']], m)
}
handler.help = ['nekopoisearch', 'nekosearch']
handler.command = /^(nekopoisearch|nekosearch)$/i
handler.tag = ['internet']
handler.premium = true

export default handler