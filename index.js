
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7470147033:AAGFtrD7AoJbS9-PRYGhAANIHhPAgU6CYzg';

webAppUrl = 'https://test-tg-bot-alex-sell.netlify.app'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.

//node app
const app = express();
app.use(express.json())
app.use(cors())

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

    if(msg?.web_app_data?.data){
        console.log('send')
        const data = JSON.parse(msg?.web_app_data?.data)

        if(data.type_page === 'form'){
            try {
                await bot.sendMessage(chatId, 'Спасибо за обратную связь')
                await bot.sendMessage(chatId, `Ваша страна: ${data?.country}`)
                await bot.sendMessage(chatId, `Ваш город: ${data?.city}`)

                setTimeout(async ()=>{
                    await bot.sendMessage(chatId, `Всю информацию вы будете получать в этом чате`)
                }, 3000)
            }catch (e) {
                console.log(e)
            }
        }

    }
});


app.post('/web-data', (req, res)=>{
    console.log(req)
    console.log(res)
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('server run port: ' + PORT)
})