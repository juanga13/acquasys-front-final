import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'
import { Provider } from 'react-redux'
import configureStore, { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'
import './styles/main.scss'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)