import Router from 'next/router';
import Link from 'next/link';
// import Button from '../components/Button';
import Header from '../components/Header';
import { useEffect } from 'react';

import { Button } from 'antd';
import '../styles/test.css';

export default function Home() {
  const PageRouterList = [{
    id: '01',
    name: 'first-post',
    title: 'First Page'
  }, {
    id: '02',
    name: 'second-post',
    title: 'Second Page'
  }]
  function handleRouter() {
    Router.push({
      pathname: '/poster',
      query: {
        name: 'first-post'
      }
    }, '/first-post')
  }
  // 钩子事件
 const events = [
   'routeChangeStart',
   'routeChangeComplete',
   'routeChangeError',
   'beforeHistoryStart',
   'hashChangeStart',
   'hashChangeComplete'
 ]
 function emitEvent(type) {
   return (...args) => (
     console.log(type, ...args)
   )
 };

 useEffect(() => {
   events.map(event => (
     Router.events.on(event, emitEvent(event))
   ))
 })


  return (
    <>
      <Header title={'home'} />
      <h1>Home</h1>
      <div>
        { PageRouterList.map(item => (
          <Link href={`/poster?name=${item.name}`}  as={`${item.name}`} key={item.id}><a>{item.title}</a></Link>
        ))}
        {/* <Button onClick={handleRouter} className="home-button" children={'Page One'} /> */}
        <div><Button>我是按钮</Button></div>
      </div>
    </>
  )
}