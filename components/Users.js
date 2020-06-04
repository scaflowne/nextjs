import Router from 'next/router';

const Users = (props) => {
  const { users } = props;

  const usersClick = async (id) => {
    Router.push('/users/[id]', `/users/${id}`);
  }

  const listUser = users.map(user => (
    <li className="border-t p-2 even:bg-gray-200 hover:bg-orange-100 flex cursor-pointer" key={user.id} onClick={e => usersClick(user.id)}>
      <img
        src={user.avatar}
        className="rounded-full h-16 w-16 flex items-center justify-center mr-3"
        alt={user.first_name + user.last_name}
      />
      <div>
        <h5 className="text-xl">{user.first_name} {user.last_name}</h5>
        <p>{user.email}</p>
      </div>
    </li>
  ));

  return (
    <ul className="border rounded border-t-0">
      {listUser}
    </ul>
  )
}

export default Users;
