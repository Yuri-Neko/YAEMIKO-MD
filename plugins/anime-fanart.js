import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`
	conn.sendButton(m.chat, 'Nih FanArtnya ', wm, await(await fetch(url)).buffer(), [['\nKeren',``]],m)
}
handler.command = /^(fanart)$/i
handler.tags = ['anime']
handler.help = ['fanart']
handler.limit = true
handler.premium = false
export default handler
