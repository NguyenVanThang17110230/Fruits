import React from 'react'
import SidebarAdmin from '../containers/SidebarAdmin'

const Admin = ({children}) => {
    return (
        <div className="row min-vh-100 mx-0" style={{backgroundColor:'#f0f2f5'}}>
            <div className="col-2 p-2">
                <SidebarAdmin />
            </div>
            <div className="col-10 py-2 px-4">
                {children}
            </div>
        </div>
    )
}

export default Admin
