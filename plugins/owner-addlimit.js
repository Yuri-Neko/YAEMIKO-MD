let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Siapa Yang Mau Di Tambahin Limitnya Sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Siapa Ay??'
    let users = global.db.data.users
    users[who].limit = 100
    conn.reply(m.chat, 'Suksess!', m)
}
handler.help = ['addlimit']
handler.tags = ['owner']
handler.command = /^addlimit(user)?$/i
handler.rowner = true

export default handler