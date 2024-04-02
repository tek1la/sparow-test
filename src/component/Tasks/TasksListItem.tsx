import { Card, CardContent } from '@mui/material'
import './TasksListItem.css'

type TasksListItemType = {
    description: string
    id: string
    ownerId?: string
    modelId?: string
    modelName: string
    name: string
    position: string
    price: string
    taskType: string
}
const UsersListItem = ({
    description,
    id,
    ownerId,
    modelName,
    name,
    position,
    price,
    taskType,
}: TasksListItemType) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="user-id">{id}</h2>
                <p className="user-type">Опис: {description}</p>
                <div className="user-type">ID розробника: {ownerId}</div>
                <div className="user-midle-name">Назва моделі: {modelName}</div>
                <div className="user-name">Назва: {name}</div>
                <div className="user-last-name">Позиція: {position}</div>
                <div className="user-last-name">Ціна: {price}</div>
                <div className="user-last-name">Тип завдання: {taskType}</div>
            </CardContent>
        </Card>
    )
}
export default UsersListItem
