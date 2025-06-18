"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Pusher from "pusher-js";

export default function Home() {

  useEffect(() => {

    Pusher.logToConsole = true;
    const pusher = new Pusher('', {
      cluster: 'ap4',
    });

    var channel = pusher.subscribe('684c08d7c12527a854fd2128');
    channel.bind('notification', function (data: any) {
      alert(JSON.stringify(data));
    });

  }, [])


  return (
    <div className={styles.page}>
      Notification PoC
    </div>
  );
}
