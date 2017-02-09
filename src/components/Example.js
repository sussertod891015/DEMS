import React from 'react'
import {connect} from 'dva';

const App = ({demo, dispatch}) => {
	return (
		<div>
			{demo.loading ? <div>loading...</div> : <div>{demo.count}</div>}
			{/*<button onClick={() => fetch(count)}>add</button>*/}
			<button onClick={() => dispatch({
				type: 'demo/asny'
			})}>add
			</button>
		</div>
	)
};


function mapStateToProps(state) {
	return {demo: state.demo};
}

export default connect(mapStateToProps)(App);
