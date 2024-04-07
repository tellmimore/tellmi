import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export const scheduleNotification = async (title: string, body: string, date: Date) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body
        },
        trigger: date
    });
}

export const getAllScheduledNotifications = async () => {
    return await Notifications.getAllScheduledNotificationsAsync();
}

export const cancelNotification = async (id: string) => {
    await Notifications.cancelScheduledNotificationAsync(id);
}

export const cancelAllNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
}