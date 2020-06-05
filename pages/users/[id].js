import fetch from 'isomorphic-fetch';
import Base from '@layouts/Base';

const User = (props) => {
  const { user, ad } = props;
  const name = `${user.first_name} ${user.last_name}`;
  const title = `User | ${name}`;
  return (
    <Base title={title}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <img src={user.avatar} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div>
            <a href={ad.url}> {ad.company} </a>
          </div>
          <div>
            {user.email}
          </div>
          <p className="text-gray-700 text-base">
            {ad.text}
          </p>
        </div>
      </div>
    </Base>
  )
}

User.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${ctx.query.id}`);
  const { data, ad } = await res.json();
  return { user: data, ad: ad }
}

export default User;
