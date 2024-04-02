import { Card, CardContent } from '@mui/material'
import './ModelsListItem.css'

type ModelsListItemType = {
    id: string
    name: string
    time: string
}
const ModelsListItem = ({ id, name, time }: ModelsListItemType) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="user-id">{id}</h2>
                <div className="user-midle-name">Назва: {name}</div>
                <div className="user-midle-name">Час: {time}</div>
            </CardContent>
        </Card>
    )
}
export default ModelsListItem
