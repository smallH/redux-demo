import React from 'react'
import PropTypes from 'prop-types'

// 高阶组件 contect 
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
	class Connect extends React.Component {
		// 通过对context调用获取store
		static contextTypes = {
			store: PropTypes.object
		}

		constructor() {
			super()
			this.state = {
				allProps: {}
			}
		}

		// 第一遍需初始化所有组件初始状态
		componentWillMount() {
			const store = this.context.store
			this._updateProps()
			store.subscribe(() => this._updateProps()); // 加入_updateProps()至store里的监听事件列表
		}

		// 执行action后更新props，使组件可以更新至最新状态（类似于setState）
		_updateProps() {
			const store = this.context.store;
			let stateProps = mapStateToProps ?
				mapStateToProps(store.getState(), this.props) : {} // 防止 mapStateToProps 没有传入
			let dispatchProps = mapDispatchToProps ?
				mapDispatchToProps(store.dispatch, this.props) : {
					dispatch: store.dispatch
				} // 防止 mapDispatchToProps 没有传入
			this.setState({
				allProps: {
					...stateProps,
					...dispatchProps,
					...this.props
				}
			})
		}

		render() {
			return <WrappedComponent {...this.state.allProps} />
		}
	}
	return Connect
}

// 高阶组件 Provider
export class Provider extends React.Component {
	static propTypes = {
		store: PropTypes.object,
		children: PropTypes.any
	}

	static childContextTypes = {
		store: PropTypes.object
	}

	// 通过对context调用设置store
	getChildContext() {
		return {
			store: this.props.store
		}
	}

	render() {
		return(
			<div>{this.props.children}</div>
		)
	}
}