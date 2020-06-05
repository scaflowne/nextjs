import Base from '@layouts/Base';
import Users from '@components/Users';

import fetch from 'isomorphic-fetch';

const Index = (props) => {
  return (
    <>
      <Base title="Users">
        <h1 className="font-mono text-3xl">Users By {process.env.NEXT_PUBLIC_API_URL}</h1>
        <Users users={props.users} />
      </Base>
    </>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?page=2`);
  const { data } = await res.json();
  return { users: data }
}

export default Index;
