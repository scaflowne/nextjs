import "@styles";
import Head from 'next/head';
import Nav from '@components/Nav';

const Base = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} {props.title && ` | ${props.title}`} </title>
      </Head>
      <div className="container mx-auto">
        <Nav />
        {props.children}
      </div>
    </>
  )
}
export default Base;
