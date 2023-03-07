import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number Kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number Salah'
  user.registered = false
  m.reply('Sukses')
}
handler.help = ['unregister']
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler