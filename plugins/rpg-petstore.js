let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hpetfood = 950

let caption = `
🐈 • *Cat:* 
➞ ${hcat} Pet Token

🐕 • *Dog:*
➞ ${hdog} Pet Token

🐎 • *Horse:* 
➞ ${hhorse} Pet Token

🦊 • *Fox:* 
➞ ${hfox} Pet Token

🍖 • *Pet Food:*
➞ ${hpetfood} Money 💹

- - - - - - - - - - - - - - - - - - - - -

${htki} ABILITY ${htka}
➞ 🐈 • Cat :
- Increase Health 5% / Level When Use *.Heal*

➞ 🐕 • Dog :
- Coming Soon...

➞ 🐎 • Horse :
- Coming Soon...

➞ 🦊 • Fox :
- Coming Soon...
`
const sections = [
   {
	title: "- Pet Store -",
	rows: [
	    {title: "🐈 • Cat", rowId: ".petshop cat"},
	    {title: "🐕 • Dog", rowId: ".petshop dog"},
	    {title: "🐎 • Horse", rowId: ".petshop horse"},
	    {title: "🦊 • Fox", rowId: ".petshop fox"},
	    {title: "🍖 • Pet Food", rowId: ".petshop petfood"},
	]
    },
]

const listMessage = {
  text: `*${htki} PET SHOP ${htka}*`,
  footer: caption,
  title: ' ',
  buttonText: "Buy",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('You Already Have It!')
            if(user.pet < hcat) return m.reply(`Your Pet Token Not Enough !`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `🎉 Congratulations, You Have Purchased Pet *Cat*`, null, [['Inventory', '.inv'],['Feed', `.feed ${type}`]],m)
            break
          case 'dog':
          if (user.dog > 0) return m.reply('You Already Have It!')
            if(user.pet < hdog) return m.reply(`Your Pet Token Not Enough !`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `🎉 Congratulations, You Have Purchased Pet *ᴅᴏɢ*`, null, [['Inventory', '.inv'],['Feed', `.feed ${type}`]],m)
            break
          case 'fox':
          if (user.fox > 0) return m.reply('You Already Have It!')
            if(user.pet < hfox) return m.reply(`Your Pet Token Not Enough !`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `🎉 Congratulations, You Have Purchased Pet *Fox*`, null, [['Imventory', '.inv'],['Feed', `.feed ${type}`]],m)
            break
          case 'horse':
          if (user.horse > 0) return m.reply('You Already Have It!')
            if(user.pet < hhorse) return m.reply(`Your Pet Token Not Enough !`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            conn.sendButton(m.chat, `*${htki} NEW PET !${htka}*`, `🎉 Congratulations, You Have Purchased Pet *Horse*`, null, [['Inventory', '.inv'],['Feed', `.feed ${type}`]],m)
            break
          case 'petfood':
          if (global.db.data.users[m.sender].money >= hpetfood * count) {
            global.db.data.users[m.sender].petFood += count * 1
            global.db.data.users[m.sender].money -= hpetfood * count
            conn.sendButton(m.chat, `*${htki} BUYING ${htka}*`, `Succesfull Boutgh *${count}* Pet Food, For *${hpetfood * count}* Money !`,null, [['Inventory', '.inv']], m)
          } else conn.reply(m.chat, `Your Money Not Enough!`, m) 
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, {quoted: m})
        }
    } else if (/Ughh/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^(petshop)/i

export default handler
