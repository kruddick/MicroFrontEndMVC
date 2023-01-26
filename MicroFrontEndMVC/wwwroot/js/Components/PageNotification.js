"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/hubs/notification").build();

connection.on("PageNotification", function (request) {
    let notificationElement = document.querySelector('#pageNotificationContainer');
    if (notificationElement) {
        notificationElement.style.backgroundColor = request.color;
        notificationElement.querySelector('span').innerText = request.message;
    }
});

connection.start();