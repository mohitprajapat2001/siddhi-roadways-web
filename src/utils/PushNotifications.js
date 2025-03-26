export const PushNotification = (message) => {
  !("Notification" in window) &&
    alert("This browser does not support desktop notification");

  Notification.permission === "granted" && new Notification(message);
  Notification.permission !== "denied" &&
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(message);
      }
    });
};
