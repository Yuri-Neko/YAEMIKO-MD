import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/vietnam?apikey=36jLEpWh'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(vietnam)$/i
handler.tags = ['asupan']
handler.help = ['vietnam']
handler.premium = true
handler.limit = true

export default handler