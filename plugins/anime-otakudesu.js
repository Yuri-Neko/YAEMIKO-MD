import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
//silakan register apikey & taruh apikey di config.js global.kyoukakey
//Fake
let ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 404,
    surface : 404,
    message: `𝙹𝙰𝙽𝙶𝙰𝙽 𝚂𝙿𝙰𝙼(•ˋ _ ˊ•)`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/5f028205d010a090a21fb.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }


	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup 🗿';
	try {
		let res = await fetch(`https://dash.api-kyouka.my.id/api/anime/otakudesu/latest?apikey=${kyoukakey}`)
		let p = await res.json()
                let x = p.result
                let listSections = [],
							tmp = [...p.result].map((v) => {
								listSections.push({
									title: v.title,
									rows: [
										{
											title: '- New Release',
											rowId: '!otakuget ' + v.link,
											description: `${v.title} ( Rilis : ${v.day} ) ( Tanggal : ${v.date} ) (${v.episode})`,
										},
									],
								})
							})
						const listMessage = {
							text: `Otakudesu`,
							footer: 'By Kyouka Hashiba❣️',
							title: 'Result from otakudesu.is\n\n',
							buttonText: 'ANIME UPDATE',
							sections: listSections,
						}
						await conn.sendMessage(m.chat, listMessage, {quoted: ftroli})
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["otakudesu"]
handler.tags = ["anime", "main"]
handler.command = /^otakudesu$/i

handler.register = true
handler.premium = false
handler.level = 4
export default handler
