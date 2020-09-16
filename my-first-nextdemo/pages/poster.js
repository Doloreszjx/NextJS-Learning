import { withRouter } from 'next/router';
import Link from 'next/link';
import Axios from 'axios';

const Poster = ({router, list}) => {
  console.log(router);
  return (
    <>
      <div>This is {router.query.name}</div>
      <div>{list}</div>
      <Link href="/"><a>back home</a></Link>
    </>
  )
}

Poster.getInitialProps = async() => {
  const promise = new Promise((resolve) => {
    Axios('https://www.fastmock.site/mock/cc0071abd364463b88cdd0e47b777661/poster/poster/list')
      .then((res) => {
        const list = res.data.data;
        resolve(list);
        console.log(list);
      })
  })
  return await promise;
}
export default withRouter(Poster);