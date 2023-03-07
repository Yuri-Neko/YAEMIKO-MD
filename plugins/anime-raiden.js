import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/randomanime/raiden-shogun?apikey=a5652f2864'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['\nGw Stress',`huuu`]],m)
		}
		handler.command = /^(raiden)$/i
		handler.tags = ['anime']
		handler.help = ['raiden']
		handler.limit = true
export default handler
