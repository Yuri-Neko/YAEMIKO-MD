import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Judulnya?`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
• *Judul:* ${result.judul}
• *Jepang:* ${result.jepang}
• *Rate:* ${result.rate}
• *Produser:* ${result.produser}
• *Tipe:* ${result.tipe}
• *Status:* ${result.status}
• *Episode:* ${result.episode}
• *Durasi:* ${result.durasi}
• *Rilis:* ${result.rilis}
• *Studio:* ${result.studio}
• *Genre:* ${result.genre}
• *Desc:* ${result.desc}
• *Batch:* ${result.batch}
• *BatchSD:* ${result.batchSD}
• *BatchHD:* ${result.batchHD}
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, '\nJadi Pengen Ke Isekai', 'huuu', m)
}

handler.help = ['otakudesu']
handler.tags = ['anime']
handler.command = /^otakudesu$/i
handler.group = false
handler.limit = true
export default handler
