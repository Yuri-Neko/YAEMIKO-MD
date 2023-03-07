 import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=Fikrii`)
let hasil = await res.json()
 m.reply(` 
*Judul:* ${hasil.result.title}

*Penulis:* ${hasil.result.creator}

*Cerita:* ${hasil.result.cerpen}`.trim())
    }  
handler.help = ['cerpen']
handler.tags = ['fun','internet']
handler.command = /^(cerpen)$/i
export default handler