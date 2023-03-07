import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Lokasinya?`
    const res = await jadwalsholat(text)
    m.reply(`
Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['jadwalsalat']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler