let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa Yang Mau Di Banned? ?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'Sukses!', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler
