import fetch from 'node-fetch'
let handler = async (m, {conn, text}) => { 
let usernam = ["chiyokoba.nana","defriiaf","naugthy666_","sachi_hime96","hishono","titinlampung13","nontylive09","kiama.o","fukada0318","dimassgamon","monkeydluffy_zz","pemanduwisatamalam","cyannn10"]
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
    let username = usernam[Math.floor(Math.random() * usernam.length)]
    let f = await fetch(`https://dash.api-kyouka.my.id/api/other/tiktok/stalk?user=${username}&apikey=${kyoukakey}`)
    let x = await f.json()
    let kann = x.result.videos
    let hasil = kann[Math.floor(Math.random() * kann.length)]
    //conn.sendButton(m.chat, `Source : ${x.images[0].source}\nUpload : ${x.images[0].uploaded_at}`, wm, x.images[0].url, [['NEXT', '/kitagawamarin']], m) 
    let tet = `*Fyp TikTok Owner*\nTiktok owner @hiro_0163\n\nPost : ${hasil.video.post}\n${hasil.video.likes} Like\n${hasil.video.comments} Komen\n${hasil.video.share} Di Bagikan\nDeskripsi Video : ${hasil.video.description}\nUsername : ${hasil.author.username}\n${x.result.followers} Followers\n${x.result.following} Following\n Deskripsi Profile: ${x.result.description}
`


conn.sendButton(m.chat, tet, wm, hasil.video.url , [['Next', '.ttfyp'],['NO WM', `.tiktok ${hasil.video.url2}`]],m,{quoted: ftroli})
}
handler.command = ['ttfyp']
handler.help = ['ttfyp']
handler.tags = ['main']
export default handler
