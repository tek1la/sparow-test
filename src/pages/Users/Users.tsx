import UsersList from 'component/Users/UsersList'

type Props = {
    usersArray: any
}
const Users = ({ usersArray }: Props) => {
    return (
        <>
            <UsersList usersArray={usersArray} />
        </>
    )
}
export default Users
