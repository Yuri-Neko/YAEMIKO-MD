import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/japan?apikey=36jLEpWh'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(japan)$/i
handler.tags = ['asupan']
handler.help = ['japan']
handler.premium = true
handler.limit = true

export default handler