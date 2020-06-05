import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800">Users</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/articles">
          <a className="text-blue-500 hover:text-blue-800">Articles</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav;
