export default {
	namespace: 'demo',
	state: {
		loading: false,
		count: 0
	},
	reducers: {
		add(state){
			const newCurrent = state.count + 1;
			return {
				...state,
				count: newCurrent
			}
		}
	},
	effects: {
		*asny(action, {put, call}){
			let count = yield call(() => {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve();
					}, 1000);
				});
			});

			yield put({type: 'add'});
		}
	}
};
