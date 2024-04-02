import DoneWorkList from 'component/DoneWork/DoneWorklist'

type Props = {
    doneWorksArray: any
}
const DoneWork = ({ doneWorksArray }: Props) => {
    return (
        <>
            <DoneWorkList doneWorksArray={doneWorksArray} />
        </>
    )
}
export default DoneWork
