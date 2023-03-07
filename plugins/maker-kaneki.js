import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teksnya?'
  let res = `https://oni-chan.my.id/api/canvas/kaneki?name=${response[0]}&apikey=`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak`, m, false)
}
handler.help = ['kaneki']
handler.tags = ['textpro']
handler.command = /^(kaneki)$/i
handler.register = false

handler.limit = true

export default handler
