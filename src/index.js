import React from 'react';
import ResumeContainer from './App';
import {render} from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Profile from './resume/Profile';
import Experience from './resume/Experience';
import Contact from './resume/Contact';
render((
    <Router history={browserHistory}>
        <Route path="/" component={ResumeContainer}>
            <Route path="profile" component={Profile}/>
            <Route path="experience" component={Experience}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('root'));

// render((
//     <ResumeContainer>
//     </ResumeContainer>
// ), document.getElementById('root'));
