import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!args[0]) throw `Ha?`
	let res = await fetch(`https://api.waifu.pics/nsfw/${text}`)
  
	if (!res.ok) throw await res.text()
	let json = await res.json()
	conn.sendButton(m.chat, `Nyaww~ ${command.capitalize()}`, json.url, json.url, [['\nJadi Sange', `huuu`]], m)
}
handler.tags = ['asupan','nsfw']
handler.help = ['lewd']
handler.command = /^(lewd)$/i
handler.premium = true
handler.limit = true

export default handler