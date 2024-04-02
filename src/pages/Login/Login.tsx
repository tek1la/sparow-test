import LoginForm from 'component/LoginForm/LoginForm'

type Props = {
    logining: () => void
}
const Login = ({ logining }: Props) => {
    return (
        <>
            <LoginForm logining={logining} />
        </>
    )
}
export default Login
