/*let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/santuy'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/jenni?apikey=36jLEpWh'
	conn.sendButton(m.chat, 'Nih Kak', wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(jenni)$/i
handler.tags = ['asupan']
handler.help = ['jenni']
handler.premium = true
export default handler


