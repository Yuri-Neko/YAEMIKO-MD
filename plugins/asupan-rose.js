import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/rose?apikey=36jLEpWh'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(rose)$/i
handler.tags = ['asupan']
handler.help = ['rose']
handler.premium = true
handler.limit = true

export default handler