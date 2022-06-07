import Head from "next/head";
import Link from "next/link";

export default function MEV() {
  return (
    <>
      <Head>
        <title>MEV | Eddy Guo</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}