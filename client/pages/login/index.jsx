import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <div
      className="p-5 min-vh-100 justify-content-center align-items-center d-flex"
      style={{
        backgroundImage: 'url("/static/images/banner-list-product.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-75 p-5 row">
        <div className="col-6 pe-0">
          <img
            className="w-100 h-100"
            src="/static/images/dau-tay.jpg"
            alt=""
          />
        </div>
        <div className="col-6 ps-0 bg-white">
          <div className="h-100 w-100 p-5">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="h-100 w-100">
                <div className="card-body text-center">
                  <h3 className="mb-5">Chào mừng bạn quay trở lại!</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg rounded-pill fs-6"
                      placeholder="Tài khoản"
                      style={{
                        paddingBottom: "0.7rem",
                        paddingTop: "0.7rem",
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg rounded-pill fs-6"
                      placeholder="Mật khẩu"
                      style={{
                        paddingBottom: "0.7rem",
                        paddingTop: "0.7rem",
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg w-100 rounded-pill fs-6"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                  <hr className="my-4" />
                  <div className="d-flex flex-column">
                    <Link className="text-decoration-none mb-2" href="#">
                      Quên mật khẩu?
                    </Link>
                    <Link className="text-decoration-none" href="/signup">
                      Đăng ký tài khoản mới!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
