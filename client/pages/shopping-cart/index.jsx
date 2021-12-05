import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";

import User from "../../layouts/User";
import { getCookie } from "../../cookie/cookie";
import { CartState } from "../../context/Context";
const CARD = "CARD"


const ShoppingCart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const decrement = (data,quantity) =>{
    console.log('data',data);
    console.log('quantity',quantity);
    if(quantity === 1){
      alert('khong dc giam nua')
    }
    else{
      dispatch({
        type: "ADD_TO_CART",
        payload: { product: data, quantity: - 0.5 },
      });
    }
  }

  const countMoney = (cart,money) =>{
    
    return cart[0].quantity*money
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-8">
          <div className="card p-3">
            <h4 className="mb-3">Danh sách sản phẩm</h4>
            <div className="row py-3 bg-dark text-white mx-0 mb-1">
            <div className="col-2">
                    Hình ảnh
                </div>
                <div className="col-2">
                    Tên trái cây
                </div>
                <div className="col-2">
                    Loại trái cây
                </div>
                
                <div className="col-2">
                    Số lượng
                </div>
                <div className="col-2">
                    Đơn Giá
                </div>
                <div className="col-2">
                    Tổng tiền
                </div>
            </div>
            {cart && cart.length >0?<><div className="card p-2 mb-2">
              <div className="row">
                <div className="col-2">
                  <img src="/static/images/bo.jpg" className="w-100" alt="" />
                </div>
                <div className="col-2 d-flex align-items-center">Bơ nam mỹ</div>
                <div className="col-2 d-flex align-items-center">Bơ</div>
                <div className="col-2 d-flex align-items-center">
                  <div className="d-flex">
                    <div
                      className="px-2 py-1 fs-4 border border-dark border-end-0 d-flex align-items-center justify-content-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product: "sp1", quantity: 0.5 },
                        });
                      }}
                    >
                      +
                    </div>
                    <input
                      type="text"
                      name="count"
                      value={cart[0].quantity}
                      className=""
                      style={{ width: "40px" }}
                      
                    />
                    <div
                      className="px-2 py-1 border border-dark border-start-0 fs-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        decrement("sp1",cart[0].quantity)
                        
                      }}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex align-items-center">250.000đ</div>
                <div className="col-2 d-flex align-items-center">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(countMoney(cart,250000))}</div>
              </div>
            </div>
            <h5 className="mt-2">Tổng tiền: <span className="fw-normal">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(countMoney(cart,250000))}</span> </h5></>:<div>khong co gi</div>}
            
          </div>
        </div>
        <div className="col-4">
          <div className="card p-3">
            <h4>Thông tin khách hàng</h4>
            <Formik
              initialValues={{
                name: "",
                email: "",
                address: "",
                phoneNumber: "",
              }}
              // onSubmit={handleSignup}
            >
              {(props) => (
                <div className="w-full max-w-md">
                  <Form onSubmit={props.handleSubmit} className="">
                    <div className="mb-4">
                      <label className="form-label" htmlFor="name">
                        Họ và tên
                      </label>
                      <Field
                        id="name"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="email">
                        Địa chỉ email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="nguyenvana@gmail.com"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="phoneNumber">
                        Số điện thoại
                      </label>
                      <Field
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="0987898926"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="address">
                        Địa chỉ nhận hàng
                      </label>
                      <Field
                        id="address"
                        name="address"
                        placeholder="123 đường abc, phường z, quận d, thành phố v"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Đặt hàng
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
ShoppingCart.getLayout = function getLayout(page) {
  return <User>{page}</User>;
};

export default ShoppingCart;
