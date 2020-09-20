import Head from 'next/head';
import { useState } from 'react';

export default function Header() {
  const [ open, setOpen ] = useState('none');
  function handleAnswer() {
    setOpen(open == 'none' ? '' : 'none');
  }
  return (
    <>
      <Head>
        <title>我是世界上最美的人</title>
        <meta charSet='utf-8' />
      </Head>
      <div>谁是世界上最美的人呀？？</div>
      <div className="head-answer">田小花女士！！！</div>
      <button onClick={handleAnswer}>揭晓答案</button>

      <style jsx>
        {`
          .head-answer {
            display: ${open}
          }
        `}
      </style>
    </>


  )
}