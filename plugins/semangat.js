import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/gambare.mp3";
	conn.sendFile(m.chat, vn, "gambare.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(semangat|gambare|ganbatte)$/i;
handler.command = new RegExp();

export default handler;
