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
          <a className="text-blue-500 hover:text-blue-800">Articles by JSON API</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/articles-graphql">
          <a className="text-blue-500 hover:text-blue-800">Articles by GraphQl</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav;
