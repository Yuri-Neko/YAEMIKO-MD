import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/yare.mp3";
	conn.sendFile(m.chat, vn, "yare.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(yare|baiklah|ok|mengerti|siap)$/i;
handler.command = new RegExp();

export default handler;
