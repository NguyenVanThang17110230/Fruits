import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Admin from "../../../layouts/Admin";

const AdminProduct = () => {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [imageView, setImageView] = useState("");
  const toggle = () => {
    setModal(!modal);
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleAddNewProduct = async (values, actions) => {
    console.log("values", values);
  };
  const onChangeValueImage = (data) => {
    if (data) {
      var reader = new FileReader();
      var a = document.querySelector(".imageView");

      reader.onload = function (e) {
        console.log("data12", e.target.result);

        setImageView(e.target.result);

        a.src = e.target.result;
      }.bind(this);
      reader.readAsDataURL(data);
    }
  };
  const addProductModal = () => {
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Nhập hàng</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              image: null,
              quantity: "",
              type: "",
              price: "",
              description: "",
            }}
            onSubmit={handleAddNewProduct}
          >
            {(props) => (
              <div className="w-full max-w-md">
                <Form onSubmit={props.handleSubmit} className="">
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="image"
                        >
                          Hình ảnh minh họa
                        </label>
                        <div className="gr-img">
                          <input
                            id="image"
                            name="image"
                            className="form-control fileupload"
                            type="file"
                            onChange={(event) => {
                              props.setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
                              onChangeValueImage(event.currentTarget.files[0]);
                            }}
                          />
                          <img
                            className="imageView shadow-md"
                            alt="main-image"
                            src="/static/images/bo.jpg"
                          />
                          <button
                            className="bg-pink px-4 py-3 rounded-3 border-0 text-white mt-3"
                            type="submit"
                            disabled={props.isSubmitting}
                          >
                            Nhập hàng
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                        >
                          Tên trái cây
                        </label>
                        <Field
                          id="name"
                          name="name"
                          placeholder="Tên trái cây"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="type"
                        >
                          Loại trái cây
                        </label>
                        <Field
                          id="type"
                          name="type"
                          placeholder="Loại trái cây"
                          className="form-control"
                          as="select"
                        >
                          <option value="1t">Táo</option>
                          <option value="2b">Bưởi</option>
                          <option value="3c">Cam</option>
                        </Field>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="quantity"
                        >
                          Số lượng
                        </label>
                        <Field
                          id="quantity"
                          name="quantity"
                          placeholder="Số lượng nhập"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="price"
                        >
                          Giá bán
                        </label>
                        <Field
                          id="price"
                          name="price"
                          placeholder="Giá bán"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="description"
                        >
                          Mô tả
                        </label>
                        <Field
                          id="description"
                          name="description"
                          placeholder="Mô tả"
                          className="form-control"
                          as="textarea"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    );
  };
  const updateModal = () => {
    return (
      <Modal isOpen={isEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Cập nhập sản phẩm</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              image: null,
              quantity: "",
              type: "",
              price: "",
              description: "",
            }}
            onSubmit={handleAddNewProduct}
          >
            {(props) => (
              <div className="w-full max-w-md">
                <Form onSubmit={props.handleSubmit} className="">
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="image"
                        >
                          Hình ảnh minh họa
                        </label>
                        <div className="gr-img">
                          <input
                            id="image"
                            name="image"
                            className="form-control fileupload"
                            type="file"
                            onChange={(event) => {
                              props.setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
                              onChangeValueImage(event.currentTarget.files[0]);
                            }}
                          />
                          <img
                            className="imageView shadow-md"
                            alt="main-image"
                            src="/static/images/bo.jpg"
                          />
                          <div className="d-flex">
                            <button
                              className="bg-pink px-4 py-3 rounded-3 border-0 text-white mt-3 me-3"
                              type="submit"
                              disabled={props.isSubmitting}
                            >
                              Cập nhật
                            </button>
                            <div
                              className="bg-dark px-4 py-3 rounded-3 border-0 text-white mt-3"
                              style={{ cursor: "pointer" }}
                            >
                              Xóa
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                        >
                          Tên trái cây
                        </label>
                        <Field
                          id="name"
                          name="name"
                          placeholder="Tên trái cây"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="type"
                        >
                          Loại trái cây
                        </label>
                        <Field
                          id="type"
                          name="type"
                          placeholder="Loại trái cây"
                          className="form-control"
                          as="select"
                        >
                          <option value="1t">Táo</option>
                          <option value="2b">Bưởi</option>
                          <option value="3c">Cam</option>
                        </Field>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="quantity"
                        >
                          Số lượng
                        </label>
                        <Field
                          id="quantity"
                          name="quantity"
                          placeholder="Số lượng nhập"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="price"
                        >
                          Giá bán
                        </label>
                        <Field
                          id="price"
                          name="price"
                          placeholder="Giá bán"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="description"
                        >
                          Mô tả
                        </label>
                        <Field
                          id="description"
                          name="description"
                          placeholder="Mô tả"
                          className="form-control"
                          as="textarea"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    );
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="py-3">Sản phẩm</h2>
        <div
          className="py-3 px-4 bg-pink text-white rounded-pill"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setModal(true)}
        >
          Nhập hàng
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên</th>
            <th scope="col">Loại trái cây</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá bán</th>
            <th scope="col">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ cursor: "pointer" }} onClick={() => setIsEdit(true)}>
            <th scope="row">SKU1545</th>
            <th>
              <img
                src="/static/images/bo.jpg"
                alt=""
                style={{ height: "100px" }}
              />
            </th>
            <td>Táo lào</td>
            <td>Táo</td>
            <td>25</td>
            <td>25.000đ/kg</td>
            <td>Táo ngon vl</td>
          </tr>
          <tr style={{ cursor: "pointer" }}>
            <th scope="row">SKU1545</th>
            <th>
              <img
                src="/static/images/bo.jpg"
                alt=""
                style={{ height: "100px" }}
              />
            </th>
            <td>Táo lào</td>
            <td>Táo</td>
            <td>25</td>
            <td>25.000đ/kg</td>
            <td>Táo ngon vl</td>
          </tr>
          <tr style={{ cursor: "pointer" }}>
            <th scope="row">SKU1545</th>
            <th>
              <img
                src="/static/images/bo.jpg"
                alt=""
                style={{ height: "100px" }}
              />
            </th>
            <td>Táo lào</td>
            <td>Táo</td>
            <td>25</td>
            <td>25.000đ/kg</td>
            <td>Táo ngon vl</td>
          </tr>
          <tr style={{ cursor: "pointer" }}>
            <th scope="row">SKU1545</th>
            <th>
              <img
                src="/static/images/bo.jpg"
                alt=""
                style={{ height: "100px" }}
              />
            </th>
            <td>Táo lào</td>
            <td>Táo</td>
            <td>25</td>
            <td>25.000đ/kg</td>
            <td>Táo ngon vl</td>
          </tr>
        </tbody>
      </table>
      {addProductModal()}
      {updateModal()}
    </>
  );
};
AdminProduct.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};
export default AdminProduct;
