"use client"

import Image from "next/image";
import styles from "./page.module.css";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '',
    });

    beamsClient.start()
      .then(() => beamsClient.addDeviceInterest('684ab37f156a5b55e993e9b4')) // use user's id here
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error);
  }, [])


  return (
    <div className={styles.page}>
      Notification PoC
    </div>
  );
}
