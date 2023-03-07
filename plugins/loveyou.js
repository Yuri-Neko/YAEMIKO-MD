import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/lopyou.mp3";
	conn.sendFile(m.chat, vn, "lopyou.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|loveyou|love|lope)$/i;
handler.command = new RegExp();

export default handler;
