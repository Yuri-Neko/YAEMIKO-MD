import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} Apa itu OpenAI`
const configuration = new Configuration({
    apiKey: "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" //api key bisa didapatkan dari https://openai.com/api/
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|yae)$/i
handler.limit = false
handler.register = false

export default handler