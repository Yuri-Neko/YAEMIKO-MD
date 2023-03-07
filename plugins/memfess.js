let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara Penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara Penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer Tidak Terdaftar Di Whatsapp.';
    
   // if (jid == m.sender) throw 'tidak bisa mengirim pesan memfess ke diri sendiri.'
    
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Hai Kak @${data.jid.split('@')[0]}, Kamu Menerima Pesan Menfess Nih.\n\nDari: *${name}*\nPesan: \n${pesan}\n\nMau Balas Pesan Ini Kak? Bisa Kak. Kakak Tinggal Ketik Pesan Kakak Nanti Saya Sampaikan Ke *${name}*.`.trim();
        await conn.sendButton(data.jid, txt, wm, null, [[' ']])
        .then(() => {
            m.reply('Berhasil Mengirim Pesan Menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('error');
    }
}
handler.tags = ['menfess']
handler.help = ['menfess', 'confess']
handler.command = /^(mfs|menfess|menfes|confes|confess)$/i
handler.register = false
handler.private = false

export default handler