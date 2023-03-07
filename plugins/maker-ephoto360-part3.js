import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teksnya?'
  m.reply('_Sedang Di Proses, Mohon Tunggu_')
  let res = `https://api.violetics.pw/api/ephoto360/${command}?apikey=1290-0463-b5e6&text=${response[0]}`
  conn.sendFile(m.chat, res, 'logo.jpg', `Nih Kak, Sudah Jadi`, m, false)
}
handler.help = ['wallpaper-moblie', 'water-3d', 'water-effect', 'water-effect2', 'watercolor-effect', 'wedding-silver', 'wet-glass', 'wings-effect', 'women-day', 'yasuo', 'yellowskin-snake', 'yena-arena-of-valor']
handler.tags = ['maker']
handler.command = /^(wallpaper-moblie|water-3d|water-effect|water-effect2|watercolor-effect|wedding-silver|wet-glass|wings-effect|women-day|yasuo|yellowskin-snake|yena-arena-of-valor)$/i

export default handler
