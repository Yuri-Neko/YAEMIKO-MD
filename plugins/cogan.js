import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cogan?apikey=Fikrii'
	conn.sendButton(m.chat, 'Random Cogan', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cogan)$/i
handler.tags = ['asupan']
handler.help = ['cogan']
handler.limit = true
export default handler
