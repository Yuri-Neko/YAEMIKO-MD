let handler = async (m, { conn, command, text }) => conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${(10).getRandom()} ${['Detik', 'Menit', 'Jam', 'Hari', 'Minggu', 'Bulan', 'Tahun', 'Dekade', 'Abad'].getRandom()} Lagi ...
  `.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['kapan', 'kapankah']
handler.tags = ['kerang', 'fun']
handler.command = /^kapan(kah)?$/i

export default handler