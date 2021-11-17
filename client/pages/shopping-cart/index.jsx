import React from "react";
import { Formik, Field, Form } from "formik";

import User from "../../layouts/User";

const ShoppingCart = () => {
  return (
    <div className="container mt-5">
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
                
                <div className="col-4">
                    Số lượng
                </div>
                <div className="col-2">
                    Giá
                </div>
            </div>
            <div className="card p-2 mb-2">
              <div className="row">
                <div className="col-2">
                  <img src="/static/images/bo.jpg" className="w-100" alt="" />
                </div>
                <div className="col-2 d-flex align-items-center">Bơ nam mỹ</div>
                <div className="col-2 d-flex align-items-center">Bơ</div>
                <div className="col-4 d-flex align-items-center">
                  <div className="d-flex">
                    <div
                      className="px-3 py-1 fs-4 border border-dark border-end-0 d-flex align-items-center justify-content-center"
                      style={{ cursor: "pointer" }}
                    >
                      +
                    </div>
                    <input
                      type="text"
                      name="count"
                      value="2"
                      className="ps-3"
                      style={{ width: "50px" }}
                    />
                    <div
                      className="px-3 py-1 border border-dark border-start-0 fs-3"
                      style={{ cursor: "pointer" }}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex align-items-center">250.000đ</div>
              </div>
            </div>
            <div className="card p-2 mb-2">
              <div className="row">
                <div className="col-2">
                  <img src="/static/images/bo.jpg" className="w-100" alt="" />
                </div>
                <div className="col-2 d-flex align-items-center">Bơ nam mỹ</div>
                <div className="col-2 d-flex align-items-center">Bơ</div>
                <div className="col-4 d-flex align-items-center">
                  <div className="d-flex">
                    <div
                      className="px-3 py-1 fs-4 border border-dark border-end-0 d-flex align-items-center justify-content-center"
                      style={{ cursor: "pointer" }}
                    >
                      +
                    </div>
                    <input
                      type="text"
                      name="count"
                      value="2"
                      className="ps-3"
                      style={{ width: "50px" }}
                    />
                    <div
                      className="px-3 py-1 border border-dark border-start-0 fs-3"
                      style={{ cursor: "pointer" }}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex align-items-center">250.000đ</div>
              </div>
            </div>
            <h5>Tổng tiền: <span className="fw-normal">250.000đ</span> </h5>
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
