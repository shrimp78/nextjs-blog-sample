import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>My First post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">Back to HOME</Link>
    </div>
  );
}
