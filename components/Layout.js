import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../src/styles/utils.module.css";
import Link from "next/link";

const name = "Microblog Title";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
          </>
        ) : (
          <>
            <img
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} `}
            />
          </>
        )}

        <h1 className={utilStyles.heading2x1}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">Back to HOME</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
