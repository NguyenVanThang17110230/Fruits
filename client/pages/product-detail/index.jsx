import React, { useState } from "react";
import Link from "next/link";

import User from "../../layouts/User";
import BannerProductDetail from "../../containers/BannerProductDetail";
import { setCookie } from "../../cookie/cookie";
import { CartState } from "../../context/Context";

const CARD = "CARD";

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const countDown = () => {
    if (count === 1) {
      alert("Phai lon hon 1");
    } else {
      setCount(count - 0.5);
    }
  };

  const addProductToCart = (value) => {
    console.log("value", value);
    setCookie(CARD, value);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <BannerProductDetail nameP="Bơ nam mỹ" />
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <img src="/static/images/bo.jpg" alt="" className="w-100" />
          </div>
          <div className="col-6">
            <div className="fw-bolder mb-4">
              Tên trái cây: <span className="fw-normal">Bơ nam mỹ</span>
            </div>
            <div className="fw-bolder mb-4">
              Mã Sku: <span className="fw-normal">1874464649</span>
            </div>
            <div className="fw-bolder mb-4">
              Loại trái cây: <span className="fw-normal">Bơ</span>
            </div>
            <div className="fw-bolder mb-4">
              Giá: <span className="fw-normal">20.000đ/kg</span>
            </div>
            <div className="d-flex">
              <div
                className="px-4 py-2 fs-3 border border-dark border-end-0 d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
                onClick={() => setCount(count + 0.5)}
              >
                +
              </div>
              <input
                type="text"
                name="count"
                defaultValue={count}
                className="ps-4"
                style={{ width: "70px" }}
              />
              <div
                className="px-4 py-2 border border-dark border-start-0 fs-3"
                style={{ cursor: "pointer" }}
                onClick={() => countDown()}
              >
                -
              </div>
            </div>
            <div
              id="add-cart-2"
              className="p-3 bg-warning d-inline-flex align-items-center mt-4"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { product: "sp1", quantity: count },
                });
              }}
              style={{cursor:'pointer'}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart me-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={6} cy={19} r={2} />
                <circle cx={17} cy={19} r={2} />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
              Thêm vào giỏ hàng
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="fw-bolder fs-3"> Thông tin chi tiết </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              et, corporis voluptatum repudiandae voluptas repellendus sunt non
              officiis qui voluptatibus culpa accusamus eius dolorum voluptates
              magnam. Necessitatibus voluptatem maiores aliquid?
            </p>
          </div>
          <div className="col-12 mt-3">
            <div className="fw-bolder fs-3">Sản phẩm liên quan</div>
            <div className="row mt-4">
              <div className="col-4 mb-4">
                <div id="card-pr" className="card h-100">
                  <div className="w-100" style={{ height: "300px" }}>
                    <img
                      src="/static/images/dudu.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <span className="card-text text-secondary fw-light">
                      Bơ
                    </span>
                    <p className="card-text fw-bolder fs-4">Bơ campuchia</p>
                    <Link href="/product-detail?id=1">
                      <a href="#">Xem chi tiết</a>
                    </Link>
                    <div
                      id="add-cart"
                      href="#"
                      className="p-3 bg-warning position-absolute top-50 start-50 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shopping-cart me-2"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={6} cy={19} r={2} />
                        <circle cx={17} cy={19} r={2} />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                      </svg>
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div id="card-pr" className="card h-100">
                  <div className="w-100" style={{ height: "300px" }}>
                    <img
                      src="/static/images/dau-tay.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <span className="card-text text-secondary fw-light">
                      Bơ
                    </span>
                    <p className="card-text fw-bolder fs-4">Bơ campuchia</p>
                    <div
                      id="add-cart"
                      href="#"
                      className="p-3 bg-warning position-absolute top-50 start-50 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shopping-cart me-2"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={6} cy={19} r={2} />
                        <circle cx={17} cy={19} r={2} />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                      </svg>
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div id="card-pr" className="card h-100">
                  <div className="w-100" style={{ height: "300px" }}>
                    <img
                      src="/static/images/mit.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <span className="card-text text-secondary fw-light">
                      Bơ
                    </span>
                    <p className="card-text fw-bolder fs-4">Bơ campuchia</p>
                    <div
                      id="add-cart"
                      href="#"
                      className="p-3 bg-warning position-absolute top-50 start-50 d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shopping-cart me-2"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={6} cy={19} r={2} />
                        <circle cx={17} cy={19} r={2} />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                      </svg>
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProductDetail.getLayout = function getLayout(page) {
  return <User>{page}</User>;
};
export default ProductDetail;
