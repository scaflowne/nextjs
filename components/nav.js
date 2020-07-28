import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="flex mb-3 py-2 px-2 md:px-0">
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
