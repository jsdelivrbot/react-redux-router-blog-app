import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import promise from 'redux-promise';


import PostsIndex from './components/PostIndex';
import PostNew from './components/PostNew';
import PostShow from './components/PostShow';

// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <BrowserRouter >
            <div>
                <header>Header</header>
                <hr/>
                <Switch>
                    <Route path="/posts/new" component={PostNew}/>
                    <Route path="/posts/:id" component={PostShow}/>

                    <Route path="/" component={PostsIndex}/>
                </Switch>
                <hr/>
                <footer>Footer</footer>
            </div>
        </BrowserRouter>

    </Provider>
    , document.querySelector('.container'));
