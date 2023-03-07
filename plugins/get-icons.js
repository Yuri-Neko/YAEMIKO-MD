import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'gettenor') {
if (!text) throw `Contoh ${usedPrefix}${command} pentol|2`
let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()
    let ter = json.results

    for (let i = 0; i < ter.length; i++) {
        let out = ter[i].media[0].mp4.url
        await conn.sendButton(m.chat, `*Nih Kak`, wm, out, [
                ['Jadikan Sticker', `${usedPrefix}s`]
            ], m)
    }
  }

  if (command == 'urltopdf') {
    if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://t.me/addsticker/...`
        let gas = `https://api.html2pdf.app/v1/generate?url=${text}&apiKey=DzhGk9fhdPope6j8PmVmbxoNDDiWbsFpdeKZfMMrrxtsl3pXCRbfYOd7N4HovaJ1`
        return conn.sendFile(m.chat, gas, 'hasil.pdf', 'Nih Kak', m)
      }
    }
      handler.command = ['gettenor', 'urltopdf']
      handler.tags = ['tools']
      export default handler