import React from 'react'
import Admin from '../../../layouts/Admin';

const AdminOrder = () => {
    return (
        <>
            <h2 className="py-3">Đơn hàng</h2>
        </>
    )
}
AdminOrder.getLayout = function getLayout(page) {
    return <Admin>{page}</Admin>;
};
export default AdminOrder
