import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/menu.mp3";
	conn.sendFile(m.chat, vn, "menu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(menu|?)$/i;
handler.command = new RegExp();

export default handler;
