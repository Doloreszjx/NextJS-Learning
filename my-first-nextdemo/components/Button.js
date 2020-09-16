import Link from 'next/link';

export default function Button({children}) {
  return(
    <>
      <Link href="/">
        <a>
          <button>{children}</button>
        </a>
      </Link>
    </>
  )
}