import React from "react";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
import toastr from "toastr";

const SignUp = () => {
  const handleSignup = (values, option) => {
    if(values.password !== values.confirmPassword){
      toastr.error("nhap lai password khong dung")
    }
    else{
      toastr.success("ajijiji")
      console.log("values", values);
    }
    
  };
  return (
    <div
      className="min-vh-100 justify-content-center align-items-center d-flex"
      style={{
        backgroundImage: 'url("/static/images/banner-list-product.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-75 p-5 row">
        <div className="col-5 pe-0">
          <img className="w-100 h-100" src="/static/images/bo.jpg" alt="" />
        </div>
        <div className="col-7 ps-0 bg-white">
          <div className="h-100 w-100 p-5">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="h-100 w-100">
                <div className="card-body text-center">
                  <h3 className="mb-5">Đăng ký tài khoản!</h3>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                    }}
                    onSubmit={handleSignup}
                  >
                    {(props) => (
                      <Form onSubmit={props.handleSubmit}>
                        <div className="row">
                          <div className="col-6">
                            {" "}
                            <div className="form-outline mb-4">
                              <Field
                                type="text"
                                name="firstName"
                                className="form-control form-control-lg rounded-pill fs-6"
                                placeholder="First Name"
                                style={{
                                  paddingBottom: "0.7rem",
                                  paddingTop: "0.7rem",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <Field
                                type="text"
                                name="lastName"
                                className="form-control form-control-lg rounded-pill fs-6"
                                placeholder="Last Name"
                                style={{
                                  paddingBottom: "0.7rem",
                                  paddingTop: "0.7rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <Field
                            type="text"
                            name="email"
                            className="form-control form-control-lg rounded-pill fs-6"
                            placeholder="Email Address"
                            style={{
                              paddingBottom: "0.7rem",
                              paddingTop: "0.7rem",
                            }}
                          />
                        </div>

                        <div className="row">
                          <div className="col-6">
                            {" "}
                            <div className="form-outline mb-4">
                              <Field
                                type="password"
                                name="password"
                                className="form-control form-control-lg rounded-pill fs-6"
                                placeholder="Password"
                                style={{
                                  paddingBottom: "0.7rem",
                                  paddingTop: "0.7rem",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <Field
                                type="password"
                                name="confirmPassword"
                                className="form-control form-control-lg rounded-pill fs-6"
                                placeholder="Reapeat Password"
                                style={{
                                  paddingBottom: "0.7rem",
                                  paddingTop: "0.7rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-primary btn-lg w-100 rounded-pill fs-6"
                          type="submit"
                        >
                          Đăng ký
                        </button>
                        <hr className="my-4" />
                        <div className="d-flex flex-column">
                          <Link className="text-decoration-none mb-2" href="#">
                            Quên mật khẩu?
                          </Link>
                          <Link className="text-decoration-none" href="/login">
                            Bạn đã có tài khoản? Đăng nhập!
                          </Link>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
