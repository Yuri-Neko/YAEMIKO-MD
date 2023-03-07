import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random'
	if (!res.ok) throw await res.text()
        let json = await res.json()
        conn.sendButton(m.chat, 'Random Meme', author, json.data.url, [['Berikutnya', `${command}`]], m)
}
handler.command = /^(randommeme)$/i
handler.tags = ['internet']
handler.help = ['randommeme']

export default handler
