let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = 'Format Salah, Contoh: ' +usedPrefix+command+ ' Menggulingkan Megawati|1. Cari-'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Judul Tidak Tersedia!\n\nAlasan: Sudah Digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'Title': title,
    'Isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `Catatan Berhasil Dibuat!\nUntuk Melihat Catatan. Ketik: ${usedPrefix}viewnote`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['notepad <title|isi>']
handler.tags = ['main']
handler.command = /^(notepad)$/i
handler.limit = false
handler.register = false

export default handler