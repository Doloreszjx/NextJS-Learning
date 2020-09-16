import Router from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';


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
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete'
  ]
  function emitEvent(type) {
    return (...args) => (
      console.log(type, ...args)
    )
  };

  useEffect(() => {
    events.forEach(event => {
      Router.events.on(event, emitEvent(event));
    })
  })

  return (
    <>
      <h1>Home</h1>
      <div>
        { PageRouterList.map(item => (
          <Link href={`/poster?name=${item.name}`}  as={`${item.name}`} key={item.id}><a>{item.title}</a></Link>
        ))}
        <button onClick={handleRouter}>Page One</button>
      </div>
    </>
  )
}