importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyB8578I6exkaR_Y32K4ilR72U6Bflcdl0E",
    authDomain: "ptbc-smartapp-dev.firebaseapp.com",
    projectId: "ptbc-smartapp-dev",
    storageBucket: "ptbc-smartapp-dev.appspot.com",
    messagingSenderId: "406795423661",
    appId: "1:406795423661:web:b6025d146cd578af3f5b24",
    measurementId: "G-6SLCXTQR1Q"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log("FCM Backgroud Payload: ");
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});
