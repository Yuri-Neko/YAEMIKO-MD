
import fetch from 'node-fetch'
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}ao Untuk Bantuan
Bonus: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendBut(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, wm, 'Main Lagi', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

export default handler
