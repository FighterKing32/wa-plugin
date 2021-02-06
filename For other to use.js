const Asena = require ('../ events');
const {MessageType} = require ('@ adiwajshing / baileys');

Asena.addCommand ({pattern: 'waifu', fromMe: true, onlygroup: true}, (async (message, match) => {

    await message.sendMessage ('Search ho rha be tharkiyon, Ruko jara Sabar karo');
    await new Promise (r => setTimeout (r, 1000));


    await message.sendMessage ('Search ho gya h! Ache se dekho Aur ache se Hilana');

})));
