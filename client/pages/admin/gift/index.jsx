import React from 'react'
import Admin from '../../../layouts/Admin';

const AdminGift = () => {
    return (
        <>
            <h2 className="py-3">Quà tặng</h2>
        </>
    )
}
AdminGift.getLayout = function getLayout(page) {
    return <Admin>{page}</Admin>;
};
export default AdminGift
