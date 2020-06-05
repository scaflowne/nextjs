import Base from '@layouts/Base';
import Users from '@components/Users';

const Index = (props) => {
  const { data } = props;
  return (
    <>
      <Base title="Users">
        <h1 className="font-mono text-3xl">Users By {process.env.NEXT_PUBLIC_API_URL}</h1>
        <Users users={data} />
      </Base>
    </>
  )
}

export default Index;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?page=2`);
    const { data } = await res.json();
    return { props: { data } }
  } catch (e) {
    console.log("catch: ", e);
  }

}
