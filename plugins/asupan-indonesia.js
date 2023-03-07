import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/asupan/62'
	conn.sendButton(m.chat, `Nih Kak`, wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(indonesia)$/i
handler.tags = ['asupan']
handler.help = ['indonesia']
handler.premium = true
handler.limit = true

export default handler