import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Game from './game/components/Game';
import { gameReducer } from './game/reducers/GameReducer'
import { Provider } from 'react-redux';
import "./index.css";

const extn = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(gameReducer, extn && extn());
const rootElement = document.getElementById('root');

const render = () => {
    ReactDOM.render(<Provider store={store}>
        <Game />
    </Provider>,
        rootElement);
};
render();
store.subscribe(render);
