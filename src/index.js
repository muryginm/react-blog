import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './containers/posts-index';
import NewPost from './components/new-post';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='container'>
        <Route exact path='/' component={PostsIndex}/>
        <Route path='/new' component={NewPost} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
