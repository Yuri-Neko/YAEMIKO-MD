async function handler(m) {
    if (!m.quoted) throw 'Reply Pesannya!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'Pesan Yang Kamu Reply Tidak Mengandung Reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i

export default handler