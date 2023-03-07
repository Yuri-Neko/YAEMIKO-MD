let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Foto Tidak Ditemukan'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `Fotonya?`
}
handler.help = ['setppgc']
handler.tags = ['group']

handler.command = /^setppgc$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
