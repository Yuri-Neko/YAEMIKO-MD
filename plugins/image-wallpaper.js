import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Mau Cari Apa`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `Hasil Pencarian Dari *${text}*`, m)
}
handler.help = ['wallpaper2']
handler.tags = ['downloader']

handler.command = /^(wallpaper2?)$/i

export default handler