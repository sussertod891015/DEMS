import React from 'react';
import {Router, Route} from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';

function RouterConfig({history}) {
	return (
		<Router history={history}>
			<Route path="/" component={HomePage}/>
		</Router>
	);
}

export default RouterConfig;
