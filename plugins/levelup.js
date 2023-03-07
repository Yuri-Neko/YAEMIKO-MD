import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
  
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level}
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* Lagi!
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    
    let pp = 'https://telegra.ph/file/a463b01147a3379d09fc6.jpg'
    const vv = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
              
    let hh = API('akuari', '/rankup', {
                                pp: vv,
                                })
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*Selamat*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim()
        m.reply(`Selamat, Kamu Telah Naik Level! *${before}* -> *${user.level}*`.trim())
        }
}
handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler
