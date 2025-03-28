import { getData } from '@/actions/todoActions';
import Todos from '@/components/todos';
import { getAllUsers } from '@/actions/userActions';

export default async function Home() {
  // const users = await getAllUsers();
  // console.log(users);
  // const data = await getData(users[0].id);
  // const user = await getData(users[0].id);

  // console.log(user);

  return (
    <main className="flex items-center justifay-between">
      {/* <Todos
        todos={data}
        user={users[0]}
      /> */}
    </main>
  );
}
