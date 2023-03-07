import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/malaysia?apikey=36jLEpWh'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['\nJadi Sange',`huuu`]],m)
}
handler.command = /^(malaysia)$/i
handler.tags = ['asupan']
handler.help = ['malaysia']
handler.premium = true
handler.limit = true

export default handler