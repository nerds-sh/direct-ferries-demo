import { AddUser } from "./add-user";
import { useUsers } from "./hooks";
import { User } from "./user";

export const Users = () => {
    const users = useUsers()

    return <div>
        {users.map((user: any) => <User user={user} />)}
        <AddUser />
    </div>;
}