import React from 'react'
import Footer from '../containers/Footer'
import Header from '../containers/Header'

const User = ({ children }) => {
    return (
        <>
          <Header />
          {children}
          <Footer />
        </>
    )
}

export default User
