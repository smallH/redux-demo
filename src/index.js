import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from './redux';
import { Provider } from './react-redux'
import themeReducer from './reducers'

// 创建store ：用于管理reducers，并返回{getState,dispatch,subscribe}
const store = createStore(themeReducer);

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));