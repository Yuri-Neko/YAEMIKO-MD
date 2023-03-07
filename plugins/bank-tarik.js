const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Kamu Belum Mempuyai Atm, Bikin Dulu Sana')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `Sukses Menarik Sebesar ${count}`, m)
  } else conn.reply(m.chat, `Uang Dibank Kamu Tidak Mencukupi Untuk Ditarik Sebesar ${count}, Mulung Dulu Sana`, m)
}
handler.help = ['tarik']
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i

export default handler