import React from 'react'
import ReactDOM from 'react-dom'
import startTicking from './app'

import './css/app.css'

/**
 * Main entry to display component on the HTML page
 * @param {ReactDOM} Component - React component to be rendered
 */
const render = Component => civilianTime =>
  ReactDOM.render(
    <Component {...civilianTime} />,
    document.getElementById('app')
  )

// start application
startTicking(render)