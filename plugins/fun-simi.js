import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Teksnya?`
  let api = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['yaemiko']
handler.tags = ['fun']
handler.help = ['simi']

export default handler