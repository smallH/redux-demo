import React from 'react'
import PropTypes from 'prop-types'
import { connect } from '../react-redux'

class ThemeSwitch extends React.Component {
	// 设置所需参数
	static propTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}

	handleSwitchColor(color) {
		if(this.props.onSwitchColor) {
			this.props.onSwitchColor(color)
		}
	}

	render() {
		return(
			<div>
		        <button
		          style={{ color: this.props.themeColor }}
		          onClick={this.handleSwitchColor.bind(this, 'red')}>Style-Red</button>
		        <button
		          style={{ color: this.props.themeColor }}
		          onClick={this.handleSwitchColor.bind(this, 'blue')}>Style-Blue</button>
      		</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		themeColor: state.themeColor
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSwitchColor: (color) => {
			dispatch({
				type: 'CHANGE_COLOR',
				themeColor: color
			})
		}
	}
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch