/*let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/lisa?apikey=36jLEpWh'
	conn.sendButton(m.chat, 'Nih Kak', wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(lisa)$/i
handler.tags = ['asupan']
handler.help = ['lisa']
handler.premium = true
export default handler

