import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Siapakah aku? ${json.soal}
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}who Untuk Bantuan
Bonus: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['Bantuan', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, author, ['Main Lagi', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

export default handler
