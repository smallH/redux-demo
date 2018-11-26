import React from 'react'
import { connect } from '../react-redux'

class Header extends React.Component {
	render() {
		return(
			<h1 style={{ color: this.props.themeColor }}>——Header——</h1>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		themeColor: state.themeColor
	}
}
Header = connect(mapStateToProps)(Header)

export default Header