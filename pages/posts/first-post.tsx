import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
