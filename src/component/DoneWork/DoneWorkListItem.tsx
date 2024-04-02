import { Card, CardContent } from '@mui/material'
import './DoneWorkListItem.css'

type DoneWorkArrayType = {
    date: string
    id: string
    modelName: string
    qrId: string
    taskName: string
    workOrder: string
    workerName: string
}
const DoneWorkListItem = ({
    date,
    id,
    modelName,
    qrId,
    taskName,
    workOrder,
    workerName,
}: DoneWorkArrayType) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="user-id">{id}</h2>
                <p className="user-type">Назва моделі: {modelName}</p>
                <div className="user-midle-name">Дата: {date}</div>
                <div className="user-midle-name">QR id: {qrId}</div>
                <div className="user-midle-name">
                    Назва завдання: {taskName}
                </div>
                <div className="user-midle-name">Замовлення: {workOrder}</div>
                <div className="user-midle-name">
                    Ім'я робочого: {workerName}
                </div>
            </CardContent>
        </Card>
    )
}
export default DoneWorkListItem
