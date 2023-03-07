import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`Gelap Banget Kek Hidup Kamu`, wm, res, [['\nPantat Gw Ireng','huuu']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler