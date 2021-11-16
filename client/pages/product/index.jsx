import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";
import User from "../../layouts/User";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dateStart:"",
      dateEnd:""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  searchStatistical = (e) =>{
    e.preventDefault();
    const { dateStart,dateEnd} = this.state
    console.log('dateStart',dateStart);
    console.log('dateEnd',dateEnd);
    if(Date.parse(dateStart)>=Date.parse(dateEnd)){
        alert("Ngày bắt đầu phải nhỏ hơn ngày kết thúc!")
    }
  }
  _updateField = (field) => (e) => this.setState({ [field]: e.target.value });

  viewModal = () => {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>Hóa đơn thanh toán</ModalHeader>
        <ModalBody>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Ngày thuê</th>
                <th scope="col">Ngày trả</th>
                <th scope="col">Số lượng xe</th>
                <th scope="col">Số tiền thuê xe</th>
                <th scope="col">Số tiền phạt</th>
                <th scope="col">Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ cursor: "pointer" }}>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    );
  };
  render() {
    return (
      <div className="row min-vh-100 mx-0">
        hello product
        {this.viewModal()}
      </div>
    );
  }
}
Product.getLayout = function getLayout(page) {
  return <User>{page}</User>;
};