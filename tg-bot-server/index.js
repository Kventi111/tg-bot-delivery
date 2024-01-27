const TelegramBot = require('node-telegram-bot-api');

const token = "6867528882:AAGsOveZBps2gwx17vgnF1YdY31UyEewAjU"
const bot = new TelegramBot(token, {polling: true});
const WEB_URL = "https://ca1a-185-59-246-161.ngrok-free.app"


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  await bot.sendMessage(chatId, 'Привет введи нормальную команду , которую я смогу обработать');

  await bot.sendMessage(chatId, 'Если хотите сделать заказ переходите в приложение', {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Сделать заказ', web_app: { url: WEB_URL } }]
        ]
    },
  })
});
