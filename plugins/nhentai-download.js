import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Kode!`
  let res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${text}?apikey=AryaXyz`)
  let json = await res.json()
  if (json.status != 200) throw `Kode Nuklir Tidak Ditemukan.`
  m.reply('_Sedang Di Proses, Mohon Tunggu...._')
  conn.sendFile(m.chat, json.result, `BahanColi.pdf`, null, m)
}
handler.help = ['nhentaidl', 'nhentaidownload']
handler.tags = ['nsfw']
handler.command = /^(nhentaidl|nhentaidownload)$/i
handler.premium = true

export default handler