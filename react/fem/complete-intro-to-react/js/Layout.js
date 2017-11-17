import React, {PropTypes} from 'react'

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

module.exports = Layout
