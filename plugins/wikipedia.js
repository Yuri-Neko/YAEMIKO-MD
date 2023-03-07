import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Cari Apa?`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
${json.img}

${json.articles}
`.trim())
}
handler.help = ['wikipedia']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
