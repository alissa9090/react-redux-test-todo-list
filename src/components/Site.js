import React from 'react'
import DevTools from 'mobx-react-devtools'

const Site = ({ children }) => (
  <div className="container">
    {children}
    <DevTools />
  </div>
)

export default Site
