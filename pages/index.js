import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rawan Aladdin</title>
        <meta name="description" content="Rawan Aladdin is a UI/UX Designer w" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-orange.svg" />
      </Head>
      <div
        className={`${styles.page} `}
      >
        <main className={styles.main}>
          Rawan Aladdin
        </main>
        <footer className={styles.footer}>
          
        </footer>
      </div>
    </>
  );
}
