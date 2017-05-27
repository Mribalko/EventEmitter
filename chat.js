const EventEmitter = require('events');

module.exports.chatApp = class ChatApp extends EventEmitter {
    /*
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
};


module.exports.chatOnMessage = (title) => {
 console.log(`${title}: ping-pong`);
 };

module.exports.readyToAnswer = (title) => {
 console.log(`${title}: Готовлюсь к ответу`);
 };

module.exports.chatOnClose = (chat) => {
 console.log(`Чат ${chat.title} закрывается :(`);
 chat.removeAllListeners('message', 'close');
 };

