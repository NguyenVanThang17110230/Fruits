import React from 'react'
import Header from '../containers/Header'

const User = ({ children }) => {
    return (
        <div>
          <Header />
          <div>{children}</div>
        </div>
    )
}

export default User
