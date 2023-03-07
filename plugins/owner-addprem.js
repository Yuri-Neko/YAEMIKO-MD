let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `Tag Nomornya Sayang!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Berapa Hari Ay?`
    if (isNaN(txt)) return m.reply(`Hanya Nomor`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`Sukses
*Nama:* ${user.name}
*Premium:* ${txt} Hari)
}
handler.help = ['addprem']
handler.tags = ['owner']
handler.command = /^addprem$/i

handler.group = true
handler.rowner = true

export default handler