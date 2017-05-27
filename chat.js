const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */

  constructor(title) {
    super();

    this.title = title;

    // Посылать каждую секунду сообщение
    setInterval(() => {
      this.emit('message', this.title);
    }, 1000);
  };

  close() {
    this.emit('close', this);
  };
}

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (title) => {
    console.log(`${title}: ping-pong`);
};

let readyToAnswer = (title) => {
    console.log(`${title}: Готовлюсь к ответу`);
};

let chatOnClose = (chat) => {
    console.log(`Чат ${chat.title} закрывается :(`);
    chat.removeAllListeners('message', 'close');
};

webinarChat
    .on('message', chatOnMessage)
    .on('message', readyToAnswer);

facebookChat
    .on('message', chatOnMessage)
    .once('close', chatOnClose);

vkChat
    .setMaxListeners(2)
    .on('message', chatOnMessage)
    .on('message', readyToAnswer)
    .once('close', chatOnClose);


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
    webinarChat.removeListener('message', chatOnMessage);
}, 15000 );