
import sound from "./assets/ping.mp3"
export function createNotification(title, options) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        console.error("This browser does not support desktop notification");
        return;
    }

    // Request permission for notification
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            // Create a new notification
            var notification = new Notification(title, options);
            
            // Customize the notification
            if (options.body) {
                notification.body = options.body;
            }
            if (options.icon) {
                notification.icon = options.icon;
            }
            if (options.tag) {
                notification.tag = options.tag;
            }
            if (options.image) {
                notification.image = options.image;
            }

            // Handle click event on notification
            notification.onclick = function () {
                console.log("Notification clicked");
                // Add your custom logic here
            };

            // Handle close event on notification
            notification.onclose = function () {
                console.log("Notification closed");
                // Add your custom logic here
            };

            // Handle error event on notification
            notification.onerror = function () {
                console.error("Error occurred in showing notification");
                // Add your custom error handling here
            };

            // Handle show event on notification
            notification.onshow = function () {
                console.log("Notification shown");
                // Add your custom logic here
            };
        } else {
            console.error("Permission denied for notification");
        }
    });
}



export const PlaySound =()=>{
    const audio = document.createElement('audio')
    audio.src=sound

    audio.play()
}