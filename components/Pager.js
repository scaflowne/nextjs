import Link from 'next/link';

const Pager = (props) => {

  const { count, pager, pathname } = props;

  const pagination = eval(count / pager.limit);

  const createPagination = () => {
    let p = [];

    for (let i = 1; i <= pagination; i++) {
      p.push(
        <Link href={`${pathname}?page=${i}`} key={i}>
          <a className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" key={i}>{i}</a>
        </Link>
      );
    }
    return p;
  }

  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <nav className="relative z-0 inline-flex shadow-sm">
          {createPagination()}
        </nav>
      </div>
    </>
  )
}

export default Pager;
