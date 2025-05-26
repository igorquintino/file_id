require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.photo) {
    const fotos = msg.photo;
    const maiorFoto = fotos[fotos.length - 1];
    console.log("file_id:", maiorFoto.file_id);
    bot.sendMessage(chatId, `✅ file_id capturado:\n${maiorFoto.file_id}`);
  } else {
    bot.sendMessage(chatId, "❌ Envie uma imagem para obter o file_id.");
  }
});



