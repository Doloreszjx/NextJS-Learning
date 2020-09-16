import Router from 'next/router';
import Link from 'next/link';


export default function Home() {
  const PageRouterList = [{
    name: 'first-post',
    title: 'First Page'
  }, {
    name: 'second-post',
    title: 'Second Page'
  }]
  function handleRouter() {
    Router.push({
      pathname: '/poster',
      query: {
        id: 'first-post'
      }
    })
  }
  return (
    <>
      <h1>Home</h1>
      <div>
        { PageRouterList.map(item => (
          <Link href={`/poster?name=${item.name}`}><a>{item.title}</a></Link>
        ))}
        <button onClick={handleRouter}>Page One</button>
      </div>
    </>
  )
}