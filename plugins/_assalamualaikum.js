import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/salam.mp3";
	conn.sendFile(m.chat, vn, "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(assalamualaikum|salam|asalamualaikum|assalam|asalam)$/i;
handler.command = new RegExp();

export default handler;
