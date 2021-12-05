import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Admin from "../../../layouts/Admin";


const Supplier = () => {
    const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  
  const toggle = () => {
    setModal(!modal);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleAddNewCategory = async (values, actions) => {
    console.log("values", values);
  }

  const handleUpdateCategory = async (values, actions) => {
    console.log("values", values);
  }

  const addCategoryModal = () => {
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thêm nhà cung cấp mới</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              description: "",
            }}
            onSubmit={handleAddNewCategory}
          >
            {(props) => (
              <div className="w-full max-w-md">
                <Form onSubmit={props.handleSubmit} className="">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Tên nhà cung cấp
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Tên nhà cung cấp"
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
                  <button
                    className="bg-pink px-4 py-3 rounded-3 border-0 text-white mt-3"
                    type="submit"
                    disabled={props.isSubmitting}
                  >
                    Thêm
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    );
  };

  const updateCategoryModal = () => {
    return (
      <Modal isOpen={isEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Cập nhập thông tin nhà cung cấp</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              name: "",
              description: "",
            }}
            onSubmit={handleUpdateCategory}
          >
            {(props) => (
              <div className="w-full max-w-md">
                <Form onSubmit={props.handleSubmit} className="">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Tên nhà cung cấp
                    </label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Tên nhà cung cấp"
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
                  <button
                    className="bg-pink px-4 py-3 rounded-3 border-0 text-white mt-3"
                    type="submit"
                    disabled={props.isSubmitting}
                  >
                    Cập nhật
                  </button>
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
        <h2 className="py-3">Nhà cung cấp</h2>
        <div
          className="py-3 px-4 bg-pink text-white rounded-pill"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setModal(true)}
        >
          Thêm nhà cung cấp
        </div>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Mã</th>
            <th scope="col">Tên nhà cung cấp</th>
            <th scope="col">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ cursor: "pointer" }} onClick={() => setIsEdit(true)}>
            <th scope="row">SKU1545</th>
            <td>Táo</td>
            <td>Không nè</td>
          </tr>
          <tr style={{ cursor: "pointer" }} onClick={() => setIsEdit(true)}>
            <th scope="row">SKU1545</th>
            <td>Táo</td>
            <td>Không nè</td>
          </tr>
          <tr style={{ cursor: "pointer" }} onClick={() => setIsEdit(true)}>
            <th scope="row">SKU1545</th>
            <td>Táo</td>
            <td>Không nè</td>
          </tr>
        </tbody>
      </table>
      {addCategoryModal()}
      {updateCategoryModal()}
    </>
  );
}
Supplier.getLayout = function getLayout(page) {
    return <Admin>{page}</Admin>;
};
export default Supplier
