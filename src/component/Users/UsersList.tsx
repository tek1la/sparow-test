import { Grid } from '@mui/material'
import UsersListItem from './UsersListItem'
import { useEffect, useState } from 'react'

type Props = {
    usersArray: {
        uid: string
        userType: string
        lastName: string
        middleName: string
        name: string
    }[]
}
type UserArrayType = {
    uid: string
    userType: string
    lastName: string
    middleName: string
    name: string
}
const UsersList = ({ usersArray }: Props) => {
    const [userArray, setUserArray] = useState<UserArrayType[]>([])
    useEffect(() => {
        setUserArray(usersArray)
    }, [usersArray])
    console.log(userArray)
    return (
        <>
            <Grid
                container
                spacing={4}
                sx={{
                    margin: '30px 0',
                }}
            >
                {userArray.map(
                    ({ uid, userType, lastName, middleName, name }) => (
                        <Grid item xs={12} sm={6} md={4} key={uid}>
                            <UsersListItem
                                userId={uid}
                                userType={userType}
                                lastName={lastName}
                                middleName={middleName}
                                name={name}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default UsersList
