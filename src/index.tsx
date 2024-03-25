import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <>
            <Main />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
