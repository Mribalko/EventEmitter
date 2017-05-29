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
            this.emit('message');
        }, 1000);
    };

    close() {
        this.emit('close');
    };
};


module.exports.chatOnMessage = function(){
 console.log(`${this.title}: ping-pong`);
 };

module.exports.readyToAnswer = function(){
 console.log(`${this.title}: Готовлюсь к ответу`);
 };

module.exports.chatOnClose = function(){
 console.log(`Чат ${this.title} закрывается :(`);
 this.removeAllListeners('message', 'close');
 };

