// Create an empty object on the window object
window.messageBus = {};

// Set a flag variable to log out messages
window.messageBus.showMesaages = true;

// Create an array to store the callbacks
window.messageBus.callbacks = [];

// Create a function to register for messages
window.messageBus.register = function (callback) {

    // Add the callback to the array
    this.callbacks.push(callback);
}

// Create a function to unregister for messages
window.messageBus.unregister = function (callback) {
    // Find the index of the callback in the array
    var index = this.callbacks.indexOf(callback);

    // If the callback is in the array, remove it
    if (index > -1) {
        this.callbacks.splice(index, 1);
    }
}

// Create a function to publish messages
window.messageBus.publish = function (messageName, messageBody) {
    if (this.showMessages) {
        console.log("Message Published: " + messageName);
        console.log(messageBody);
    }

    // Iterate through the callbacks and call them with the message
    this.callbacks.forEach(function (callback) {
        callback(messageName, messageBody);
    });
}