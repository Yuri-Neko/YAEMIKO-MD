/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
m.reply(krtu)
}
/*let wibu = `https://telegra.ph/file/b5cc36920ff446bd25de7.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonImg(m.chat, krtu, 'Jangan Lupa Diisi','\nSaya Govlok','huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://github.com/Zeltoria",
    mediaType: "VIDEO",
    description: "https://github.com/Zeltoria", 
    title: 'Yaemiko-Multidevices',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}*/
handler.command = /^(intro)$/i

export default handler

