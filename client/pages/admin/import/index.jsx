import React from 'react'
import Admin from '../../../layouts/Admin';

const ImportBill = () => {
    return (
        <>
            <h2 className="py-3">Hóa đơn nhập hàng</h2>
        </>
    )
}
ImportBill.getLayout = function getLayout(page) {
    return <Admin>{page}</Admin>;
};
export default ImportBill
