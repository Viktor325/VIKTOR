const TelegramApi =  require('node-telegram-bot-api')
const request = require ('request')
const token = '5239695750:AAG3t4yz3mlbByE8dIVd6gh-J6rJwcJB8GM'
const bot = new TelegramApi(token,{polling:true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)
})