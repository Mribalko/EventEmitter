// импортируем модуль
const chat = require('./chat');

// инициализируем чаты
let webinarChat =  new chat.chatApp('webinar');
let facebookChat = new chat.chatApp('=========facebook');
let vkChat =       new chat.chatApp('---------vk');

// подписываем чаты на события
webinarChat
    .on('message', chat.chatOnMessage)
    .on('message', chat.readyToAnswer);

facebookChat
    .on('message', chat.chatOnMessage)
    .once('close', chat.chatOnClose);

vkChat
    .setMaxListeners(2)
    .on('message', chat.chatOnMessage)
    .on('message', chat.readyToAnswer)
    .once('close', chat.chatOnClose);


// Закрыть вконтакте
setTimeout( ()=> {
    vkChat.close();
}, 10000 );


// Закрыть фейсбук
setTimeout( ()=> {
    facebookChat.close();
}, 15000 );

// Отписать вебинар от chatOnMessage
setTimeout( ()=> {
    webinarChat.removeListener('message', chat.chatOnMessage);
}, 30000 );