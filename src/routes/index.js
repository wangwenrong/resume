import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from '../layouts/App';
import Task from '../containers/Task';
import User from '../containers/User';
import Time from '../containers/Time';

export default(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Task}/>
            <Route path='user' component={User}></Route>
            <Route path='time' component={Time}></Route>
        </Route>
    </Router>
)
