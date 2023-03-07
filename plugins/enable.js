let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} List Options`,
	rows: [
	    {title: "Welcome", rowId: `${usedPrefix + command} welcome`},
	    {title: "Delete", rowId: `${usedPrefix + command} delete`},
            {title: "Autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	    {title: "Publik", rowId: `${usedPrefix + command} public`},
	{title: "Simi", rowId: `${usedPrefix + command} simi`},
	{title: "Nsfw", rowId: `${usedPrefix + command} nsfw`},
	{title: "PremNsfwChat", rowId: `${usedPrefix + command} premnsfwchat`},
	{title: "Antilink", rowId: `${usedPrefix + command} antilink`},
	{title: "Anti Delete", rowId: `${usedPrefix + command} antidelete`},
	{title: "Antilink Wa", rowId: `${usedPrefix + command} antilinkwa`}, 
	{title: "Antilink Ig", rowId: `${usedPrefix + command} antilinkIg`}, 
    {title: "Antilink Yt", rowId: `${usedPrefix + command} antilinkyt`}, 
    {title: "Antilink Tiktok", rowId: `${usedPrefix + command} antilinktik`},
    {title: "Anti Http", rowId: `${usedPrefix + command} antihatetepe`}, 
    {title: "Antilink Bitly", rowId: `${usedPrefix + command} antilinkbitly`},  {title: "Antilink Tele", rowId: `${usedPrefix + command} antilinktel`},
	{title: "Anti Satir", rowId: `${usedPrefix + command} antisatir`},
	{title: "Anti Spam", rowId: `${usedPrefix + command} antispam`},
	{title: "Anti Sticker", rowId: `${usedPrefix + command} antisticker`},
	{title: "Anti Virtex", rowId: `${usedPrefix + command} antivirtex`},
	{title: "Auto Presence", rowId: `${usedPrefix + command} autopresence`},
	{title: "Auto Reply", rowId: `${usedPrefix + command} autoreply`},
	{title: "Auto Sticker", rowId: `${usedPrefix + command} autosticker`},
	{title: "Auto Upmine", rowId: `${usedPrefix + command} autoupmine`},
	{title: "Auto Join", rowId: `${usedPrefix + command} autojoin`},
	{title: "Auto Upnews", rowId: `${usedPrefix + command} autoupnews`},
	{title: "Auto Vn", rowId: `${usedPrefix + command} autovn`},
	{title: "Auto Levelup", rowId: `${usedPrefix + command} autolevelup`},
	{title: "Bc Join", rowId: `${usedPrefix + command} bcjoin`},
	{title: "Detect", rowId: `${usedPrefix + command} detect`},
	{title: "Document", rowId: `${usedPrefix + command} document`},
	{title: "WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "Nyimak", rowId: `${usedPrefix + command} nyimak`},
	{title: "Antibadword", rowId: `${usedPrefix + command} antibadword`},
	{title: "PcOnly", rowId: `${usedPrefix + command} pconly`},
	{title: "GcOnly", rowId: `${usedPrefix + command} gconly`},
	{title: "SwOnly", rowId: `${usedPrefix + command} swonly`},
	{title: "Freply", rowId: `${usedPrefix + command} freply`}, 
	{title: "Clear", rowId: `${usedPrefix + command} clear`}, 
	{title: "Desc", rowId: `${usedPrefix + command} desc`},
	{title: "Getmsg", rowId: `${usedPrefix + command} getmsg`}, 
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*Pilih Salah Satu Di Bawah*`,
  buttonText: "Touch Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'freply':
    case 'fakereply':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.freply = isEnable
      break
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBadword = isEnable
     break
    case 'clear':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.clear = isEnable
      break
          case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
      case 'bcjoin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.bcjoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'antilinkbitly':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkBitly = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
      case 'antisatir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autopresence':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoPesence = isEnable
      break
      case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
      case 'autosticker':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoSticker = isEnable
      break
      case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
      case 'autojoin':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoJoin = isEnable
      break
      case 'autoupnews':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnimeNews = isEnable
      break
      case 'autoupnime':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.updateAnime = isEnable
      break
     case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
       case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
     case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButton(m.chat, `
*Options:* ${isEnable ? 'Enable' : 'Disable'}
*For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`,wm, null, [[`${isEnable ? 'Disable' : 'Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['\nSaya Goblok', 'huuu']],m)
}
handler.help = ['enable', 'disable']
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler