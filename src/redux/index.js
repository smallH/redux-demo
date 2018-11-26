export const createStore = (reducer) => {
	let state = null
	const listeners = []; // 事件监听列表
	const subscribe = (listener) => listeners.push(listener); // 定义添加事件对外接口
	const getState = () => state; // 定义获取状态总值对外接口
	// 定义驱动 Aciton 的对外接口，每次驱动会遍历执行listeners列表里的所有事件
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((listener) => listener())
	}
	dispatch({}); // 首次初始化state
	return {
		getState,
		dispatch,
		subscribe
	}
}