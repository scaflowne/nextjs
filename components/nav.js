import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about">
          <a className="text-blue-500 hover:text-blue-800">About</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav;
