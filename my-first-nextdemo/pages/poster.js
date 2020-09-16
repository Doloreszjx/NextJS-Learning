import { withRouter } from 'next/router';
import Link from 'next/link';

const Poster = ({router}) => {
  return (
    <>
      <div>This is {router.query.name}</div>
      <Link href="/"><a>back home</a></Link>
    </>
  )
}

export default withRouter(Poster);