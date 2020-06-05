import fetch from 'isomorphic-fetch';
import Base from '@layouts/Base';

const User = (props) => {
  const { data, ad } = props;
  const name = `${data.first_name} ${data.last_name}`;
  const title = `User | ${name}`;
  return (
    <Base title={title}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
        <img src={data.avatar} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div>
            <a href={ad.url}> {ad.company} </a>
          </div>
          <div>
            {data.email}
          </div>
          <p className="text-gray-700 text-base">
            {ad.text}
          </p>
        </div>
      </div>
    </Base>
  )
}

export default User;

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${ctx.query.id}`);
    const { data, ad } = await res.json();
    return { props: { data, ad } }
  } catch (e) {
    console.log("catch: ", e);
  }
}

