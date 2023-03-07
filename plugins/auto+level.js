const rewards = {
  exp: 10000,
  money: 4999,
  potion: 5,
}
const cooldown = 1
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `Kamu Sudah Mengambilnya Hari Ini Tunggu Lah *${((user.lastclaim + cooldown) - new Date()).toTimeString()}* Lagi`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'Tes Auto+XP', text.trim(), null, ['Makasih', 'ok'],m)
  user.lastclaim = new Date * 1
}
handler.help = ['autoxp']
handler.tags = ['xp']
handler.premium = false
handler.command = /^(xpx)$/i

handler.cooldown = cooldown

export default handler