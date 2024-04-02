import { Grid } from '@mui/material'
import ModelsListItem from './ModelsListItem'
import { useEffect, useState } from 'react'

type Props = {
    modelsArray: {
        id: string
        name: string
        time: string
    }[]
}
type ModelArrayType = {
    id: string
    name: string
    time: string
}
const ModelsList = ({ modelsArray }: Props) => {
    const [modelArray, setModelArray] = useState<ModelArrayType[]>([])
    useEffect(() => {
        setModelArray(modelsArray)
    }, [modelsArray])
    console.log(modelArray)
    return (
        <>
            <Grid
                container
                spacing={4}
                sx={{
                    margin: '30px 0',
                }}
            >
                {modelArray.map(({ id, name, time }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ModelsListItem id={id} name={name} time={time} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ModelsList
