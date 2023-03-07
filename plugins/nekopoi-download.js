import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
  if (!text) throw `Kodenya?`
  let res = await fetch(`https://api.itsrose.site/dewasa/nekopoi/detail?id=${text}&apikey=itsroseUnlimitedLimit`)
  let res2 = await res.json()
  if (res2.status != true) throw `Mungkin Kode Salah`
  let cap = `• *Title:* ${res2.result.title}
• *ID:* ${res2.result.id} `
  for (let json of res2.result.stream) {
   cap += ` 
• *Url Streaming:* ${json.link}\n
`
  	}
  for (let down of res2.result.download) {
    cap += `
Type: ${down.type}

Name: ${down.links[0].name}
Link: ${down.links[0].link}

Name: ${down.links[1].name}
Link: ${down.links[1].link}

Name: ${down.links[2].name}
Link: ${down.links[2].link}\n`
  }
   conn.sendButton(m.chat, cap, wm, await( await fetch(res2.result.image)).buffer(), [['\nJadi Pengen Anu :v', 'huuu']], m)
}
handler.help = ['nekopoidl', 'nekopoidownload', 'nekodl']
handler.command = /^(nekopoidownload|nekopoidl|nekodl)$/i
handler.tag = ['downloader']
handler.limit = true

export default handler

// By Ekuzika
// Don't remove this wm :v