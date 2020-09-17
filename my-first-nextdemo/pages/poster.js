import { withRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';


const Poster = ({router, id}) => {
  return (
    <>
      <div>This is {router.query.name}{id}</div>
      <Link href="/"><a>back home</a></Link>
    </>
  )
}
Poster.getInitialProps = async() => {
  const promise = new Promise((resolve) => {
    axios('https://www.fastmock.site/mock/cc0071abd364463b88cdd0e47b777661/poster/poster/list')
      .then((res) => {
        const list = res.data.data;
        resolve(list);
        console.log('11111', list);
      })
  })
  return await promise;
}
export default withRouter(Poster);