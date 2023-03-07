export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        conn.sendButtonDoc(m.chat,`
  Kamu Berhenti AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `,wm,'Hai Bang','Ya',m,fakeig)
        user.afk = -1
        user.afkReason = ''
    }
    
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        conn.sendButtonDoc(m.chat,`
  Jangan Tag Dia!
  Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
  Selama ${(new Date - afkTime).toTimeString()}
  `,wm,'Maaf Bang','Ya',m,fakeig)
    }
    return true
}