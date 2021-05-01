// Auto Generated from Firebase Console > Project Setting > General > Add Web Apps
var firebaseConfig = {
    apiKey: "AIzaSyB8578I6exkaR_Y32K4ilR72U6Bflcdl0E",
    authDomain: "ptbc-smartapp-dev.firebaseapp.com",
    projectId: "ptbc-smartapp-dev",
    storageBucket: "ptbc-smartapp-dev.appspot.com",
    messagingSenderId: "406795423661",
    appId: "1:406795423661:web:b6025d146cd578af3f5b24",
    measurementId: "G-6SLCXTQR1Q"
};

$(function () {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const messaging = firebase.messaging();
    useFirebase(messaging);
});


function useFirebase(messaging) {
    // Asking User's Permission
    messaging.requestPermission()
        .then(function () {
            // User Click Allowed
            console.log("Permitted");
            return messaging.getToken(); // Requesting Firebase for FCM Token
        })
        .then(function (token) {
            console.log("FCM Token: " + token);
            $("#token").text(token);
        })
        .catch(function () {
            // User Click Block
            console.log("Rejected")
        });

    // Listening to Notification Message
    messaging.onMessage(function (message) {
        console.log("FCM Message: ");
        console.log(message);
        $("#message").text(JSON.stringify(message))
    })
}