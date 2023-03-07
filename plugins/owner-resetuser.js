let handler = async (m, { conn, text }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Yang Mau Di Reset Siapa`, m)
  //let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `Nomor Salah`, m)
  if(number.length > 15) return conn.reply(m.chat, `Nomor Salah`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
  
	delete global.db.data.users[user]
 	
 	conn.reply(m.chat, `Berhasil Menghapus @${number} Dari *DATABASE*`, null, {contextInfo: {
    mentionedJid: [user]
 	}})

 
 }
}
handler.help = ['reset']
handler.tags = ['owner']
handler.command = /^reset$/i
handler.admin = false
handler.owner = true
handler.group = false
handler.botAdmin = false
export default handler