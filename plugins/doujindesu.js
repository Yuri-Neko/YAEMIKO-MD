import fetch from "node-fetch";
import db from "../lib/database.js";

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
	let name = await conn.getName(m.sender);
	if (!args[0] || !args) {
		m.reply("Searching Latest Update");
		let res = await fetch(
			global.API("rose", "/dewasa/doujindesu/latest", {}, "apikey")
		).then((a) => a.json());
		let teks = "Latest Update On Doujindesu";
		let sections = [];
		res.result.map((v) => {
			sections.push({
				title: `Detail | ${v.title}`,
				rowId: `${usedPrefix + command} ${v.url}`,
			});
		});
		let Msg = {
			text: "Silahkan Pilih Di Bawah",
			footer: wm,
			title: teks,
			buttonText: "Click here",
			sections: [
				{
					title: teks,
					rows: sections,
				},
			],
		};
		conn.sendMessage(m.chat, Msg, { quoted: m });
		//m.reply(teks);
	} else if (text.startsWith("https://doujindesu.xxx/")) {
		m.reply("Searching Download Url");
		let res = await fetch(
			global.API("rose", "/dewasa/doujindesu/download", { url: text }, "apikey")
		).then((a) => a.json());
		let { title, thumb, jp, tags, information, batch } = res.result;
		let info = `*Status :* ${information.status}\n*Type :* ${information.type}\n*Tags :* ${tags.join(", ")}\n`;
		let downloads = "";
		if (batch) {
			for (let i of batch) {
				downloads += `*Chapters :* ${i.chapter}\n*Link :* ${i.url}\n\n`;
			}
		} else {
			for (let i of res.result.chapters) {
				downloads += `================\n*${i.episode}*\n*Date :* ${i.date}\n*Link :* ${i.url}\n================`;
			}
		}
		let complit = `*Title :* ${title} ${jp}\n${info}\n*Download :* \n${downloads}`;
		//         conn.sendFile(m.chat, thumb, '', complit, m)
		m.reply(complit);
	} else {
		m.reply("Searching For " + text);
		let res = await fetch(
			global.API("rose", "/dewasa/doujindesu/search", { query: text }, "apikey")
		).then((a) => a.json());
		let teks = "Found Result for " + text;
		let sections = [];
		res.result.map((v) => {
			sections.push({
				title: v.title,
				rowId: `${usedPrefix + command} ${v.url}`,
				description: `${v.type} | ${v.score} | ${v.status}`,
			});
		});
		let Msg = {
			text: "Silahkan Pilih Di Bawah",
			footer: wm,
			title: teks,
			buttonText: "Click here",
			sections: [
				{
					title: teks,
					rows: sections,
				},
			],
		};
		conn.sendMessage(m.chat, Msg, { quoted: m });
	}
};
function random(list) {
	return list[Math.floor(list.length * Math.random())];
}
handler.help = ["doujindesu"];
handler.tags = ["nsfw"];
handler.command = ["doujindesu", "dds"];
handler.premium = true
export default handler;
