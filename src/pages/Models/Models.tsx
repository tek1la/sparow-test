import ModelsList from 'component/Models/ModelsList'

type Props = {
    modelsArray: any
}
const Models = ({ modelsArray }: Props) => {
    return (
        <>
            <ModelsList modelsArray={modelsArray} />
        </>
    )
}
export default Models
