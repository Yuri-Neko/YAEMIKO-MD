let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Pertanyaan?`
    m.reply(`"${[
        'Mungkin suatu hari',
        'Tidak Juga',
        'Tidak Keduanya',
        'Kurasa Tidak',
        'Ya',
        'Coba Tanya Lagi',
        'Tidak Ada'
    ].getRandom()}."`)
}
handler.help = ['kerang', 'kerangajaib']
handler.tags = ['kerang', 'fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i

export default handler
