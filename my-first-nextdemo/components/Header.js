import Head from 'next/head';

export default function Header ({title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
      </Head>
    </>
  )
}