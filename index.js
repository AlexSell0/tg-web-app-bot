
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7470147033:AAGFtrD7AoJbS9-PRYGhAANIHhPAgU6CYzg';

webAppUrl = 'https://test-tg-bot-alex-sell.netlify.app'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    const text = msg.text

    if(text === '/start'){
        await bot.sendMessage(chatId, 'Ниже появится кнопка заполни форму', {
            reply_markup: {
                keyboard: [
                    [{text: 'Заполнить форму', web_app: {url: webAppUrl + '/form'}}]
                ]
            }
        });

        // send a message to the chat acknowledging receipt of their message
        await bot.sendMessage(chatId, 'Ниже появится кнопка заполни форму', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        });
    }

    if(msg?.web_app_data?.data?.form){
        console.log('send')
        try {
            const data = JSON.parse(msg?.web_app_data?.data)
            console.log(data)

            await bot.sendMessage(chatId, 'Спасибо за обратную связь')
            await bot.sendMessage(chatId, `Ваша страна: ${data?.country}`)
            await bot.sendMessage(chatId, `Ваш город: ${data?.city}`)

            setTimeout(async ()=>{
                await bot.sendMessage(chatId, `Всю информацию вы будете получать в этом чате`)
            }, 3000)
        }catch (e) {
            console.log(e)
        }
    }else{
        console.log('errr')
        console.log(msg)
    }

    if(msg){
        console.log(msg)
    }


});