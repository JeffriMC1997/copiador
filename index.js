const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors());
const router = express.Router();

router.get("/inicio", function (req, res) {
  res.json({'name':'jeffri montero'});
});

// Iniciar servidor
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



const TeleBot = require('telebot');
const bot = new TeleBot("6834825273:AAH3Y0_MYkt22QtYE3Fmw6_xcwVo3RqAHGo");
// id = -1002141407630
bot.on('text', (msg) => {
    msg.reply.text(msg.text)
    type_chat = msg['sender_chat']['type']
    id_chat = msg['sender_chat']['id']
    if(type_chat == 'channel' && id_chat == '-1002141407630')
    {
        console.log(msg.text)
    }
});

bot.start();