import React from 'react'
import Header from '../containers/Header'

const User = ({ children }) => {
    return (
        <>
          <Header />
          {children}
        </>
    )
}

export default User
