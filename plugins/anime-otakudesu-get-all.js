import fetch from 'node-fetch'
let handler = async(m, {
    conn, usedPrefix, command, text
}) => {
    if (command === 'otakuget') {
        let f = await fetch(`https://dash.api-kyouka.my.id/api/anime/otakudesu/detail?apikey=${kyoukakey}&url=${text}`)
        let xx = await f.json()
        let pii = xx.result
        let teks = `乂 *${pii.info.judul}*

❃ _*Score:*_ ${pii.info.skor}
❃ _*Produser:*_ ${pii.info.produser}
❃ _*Studio:*_ ${pii.info.studio}
❃ _*Total Eps:*_ ${pii.info.episode}
❃ _*Tanggal Rilis:*_ ${pii.info.tanggal_rilis}
❃ _*Genre:*_ ${pii.info.genre}
❃ _*Sinopsis:*_ ${pii.sinopsis}
        `
        await conn.sendButton(m.chat, teks, wm, pii.thumb, [['Download Eps', '.otakudl ' + text]], m)
    }
    if (command === 'otakudl') {
        let ff = await fetch(`https://dash.api-kyouka.my.id/api/anime/otakudesu/detail?apikey=${kyoukakey}&url=${text}`)
        let xxx = await ff.json()
        let piii = xxx.result
        let row = Object.values(piii.episode).map((v, index) => ({
            title: '乂 ' + v.episode,
            description: '',
            mentions: [m.sender],
            rowId: usedPrefix + 'otakudll ' + v.id
        }))
        let button = {
            buttonText: 'Tap!',
            description: `乂 _*Silakan Download*_\n乂_*Episode Yang Tersedia*_`,
            footerText: '_Silahkan Pilih Episode Dibawah_'
        }
        return conn.sendListM(m.chat, button, row, m)
    }
    if (command === 'otakudll') {
        let ry = await fetch(`https://dash.api-kyouka.my.id/api/anime/otakudesu/downloadv2?apikey=${kyoukakey}&id=${text}`)
        let p = await ry.json()
                let x = p.result
                let listSections = [],
							tmp = [...p.result].map((v) => {
								listSections.push({
									title: v.quality,
									rows: [
										{
											title: 'Size' + v.size,
											rowId: '!zippy ' + v.url.Zippy,
											description: `  `,
										},
									],
								})
							})
						const listMessage = {
							text: `Otakudesu`,
							footer: 'By Kyouka Hashiba❣️',
							title: 'Thanks To Admin otakudesu\n\n',
							buttonText: 'DOWNLOAD HERE!',
							sections: listSections,
						}
						await conn.sendMessage(m.chat, listMessage, {quoted: m})
       //ABAIKAN UDA GA GUNA ANYINKK 
	    /* let ha = await ry.json()
        let r = ha.result
        let dw1 = await fetch(`https://api.zahwazein.xyz/convert/geturl?url=${r[0].url.Zippy}&apikey=`)
        let d1 = await dw1.json()
        let dw2 = await fetch(`https://api.zahwazein.xyz/convert/geturl?url=${r[1].url.Zippy}&apikey=`)
        let d2 = await dw2.json()
        let dw3 = await fetch(`https://api.zahwazein.xyz/convert/geturl?url=${r[2].url.Zippy}&apikey=`)
        let d3 = await dw3.json()
        const sections = [{
            title: `Resolusi ${r[0].quality} (${r[0].size})`,
            rows: [{
                title: 'Link Download 1',
                rowId: ".zippy " + d1.result,
                description: `URL ${d1.result}`
            }]},
            {
                title: `Resolusi ${r[1].quality} (${r[1].size})`,
                rows: [{
                    title: 'Link Download Ke 2',
                    rowId: ".zippy " + d2.result,
                    description: `URL ${d2.result}`
                }]},
            {
                title: `Resolusi ${r[2].quality} (${r[2].size})`,
                rows: [{
                    title: 'Link Download Ke 3',
                    rowId: ".zippy " + d3.result,
                    description: `URL ${d3.result}`
                }]}]
        const listMessage = {
            text: 'Silahkan Pilih Link Download Dibawah',
            footer: wm,
            title: r.title,
            mentions: [m.sender],
            buttonText: 'Tap!',
            sections
        }
        return conn.sendMessage(m.chat, listMessage, {
            quoted: m
        })*/
        }
}
handler.command = /^(otakuget|otakudl|otakudll)$/i
export default handler
