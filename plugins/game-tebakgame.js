import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (id in conn.tebakgame) {
        conn.sendButton(m.chat, 'Masih Ada Soal Yang Belum Terjawab', author, null, buttons, conn.tebakgame[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
Logo Apakah Ini?

Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hgame Untuk Bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakgame[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgame[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['Main Lagi', '/tebakgame']
            ], conn.tebakgame[id][0])
            delete conn.tebakgame[id]
        }, timeout)
    ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i

export default handler

const buttons = [
    ['Bantuan', '/hgame'],
    ['Nyerah', 'menyerah']
]