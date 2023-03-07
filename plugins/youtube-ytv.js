import fetch from "node-fetch";
import axios from "axios";

import * as fs from "fs";

let handler = async (m, { conn, args, usedPrefix, command }) => {
	conn.youtubemp4 = conn.youtubemp4 ? conn.youtubemp4 : {};

    if (m.sender in conn.youtubemp4) return; //m.reply(`*Sedang mengirim video sebelumnya!*`);
	if (!args || !args[0])
		throw (
			"Linknya?"
		);

    conn.youtubemp4[m.sender] = true;
	let res;
	const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp4`;
	const writer = fs.createWriteStream(_filename);
	try {
		let data = await fetch(
			global.API("rose", "/downloader/yt", { url: args[0] }, "apikey")
		);
		let json = await data.json();
		if (!json.status) {
			return m.reply("Can\'t download that video")
		}
		m.reply("Mengirim Video");
		axios.get(json.video.url, {
			responseType: "stream"
		}).then(async(data) => {
			return new Promise(async(resolve, reject) => {
				data.data.pipe(writer);
				writer.on("error", () => {
					m.reply("Gagal Mengirim Video")
					resolve()
				})
				writer.on("close", async() => {
					try {
						await conn.sendMessage(m.chat, {
							video: {
								stream: fs.createReadStream(_filename)
							},
							caption: `*Title :* ${json.title}\n*Duration :* ${json.duration}`
						},
							{ quoted: m }
						);
					} catch {
						await conn.sendMessage(m.chat, {
							document: {
								stream: fs.createReadStream(_filename)
							},
							fileName: `${json.title}.${json.video.ext}`,
							mimetype: "video/mp4",
							caption: `*Title :* ${json.title}\n*Duration :* ${json.duration}`
						},
							{ quoted: m }
						);
					}
					fs.unlinkSync(_filename)
					resolve()
				})
			})
		})
	} catch (e) {
		m.reply("Gagal Mengirim Video\n\n" + e);
	} finally {
		delete conn.youtubemp4[m.sender]
	}
};
handler.help = ["ytmp4", "ytv"]
handler.tags = ["downloader"];
handler.command = /^yt(v|mp4)?$/i;

handler.exp = 0;

export default handler;
