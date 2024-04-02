import { Card, CardContent } from '@mui/material'
import './UsersListItem.css'

type UsersListItemType = {
    userId: string
    userType: string
    lastName: string
    middleName: string
    name: string
}
const UsersListItem = ({
    userId,
    userType,
    lastName,
    middleName,
    name,
}: UsersListItemType) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="user-id">{userId}</h2>
                <p className="user-type">Посада: {userType}</p>
                <div className="user-midle-name">Прізвище: {middleName}</div>
                <div className="user-name">Ім'я: {name}</div>
                <div className="user-last-name">По батькові: {lastName}</div>
            </CardContent>
        </Card>
    )
}
export default UsersListItem
