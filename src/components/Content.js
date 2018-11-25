import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import { connect } from '../react-redux'

class Content extends React.Component {
	
	render() {
		return(
			<div>
        		<p style={{ color: this.props.themeColor }}>[This is content...]</p>
        		<ThemeSwitch />
      		</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content;