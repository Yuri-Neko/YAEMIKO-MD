import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Teksnya?', m)

conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(ツ)_/¯', m)
}

handler.help = ['qrcode']
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler