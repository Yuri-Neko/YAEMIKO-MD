import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://fikrii.frteamapp.me/api/random/cosplay?apikey=APIKEY'
	conn.sendButton(m.chat, 'Random Cosplay', wm, await(await fetch(url)).buffer(), [['\nMantap Cuy',`huuu`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime','asupan']
handler.help = ['cosplay']
handler.limit = true
export default handler
