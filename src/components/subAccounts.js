import React from "react";
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Icon,
  Input,
  Form,
  Button,
  Divider
} from "antd";
import "antd/dist/antd.css";
function SubAccounts(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Divider />
      <Row style={{ float: "left", marginLeft: "5%" }}>
        <Col span={22}>
          <h2>Subaccounts</h2>
        </Col>
      </Row>
      <Row style={{ float: "left", marginLeft: "5%" , textAlign:'justify'}}>
        <Col span={22}>
          <p>
            Subaccounts in Twillo are just accounts that are "owned" by another
            account. Using a subaccount you can segment each of your customer's
            use Twillo and keep it separate from all the rest, allow you to
            easily manage the activity and resources of each customer
            independently.
          </p>
        </Col>
      </Row>
      <Row >
        <Col span={22}>
          <p>
            <b>
              Note: closed your sub accounts will be automatically deleted 30
              days after clouser.
            </b>
          </p>
        </Col>
      </Row>
      {/* <div> */}
        <Row style={{ backgroundColor: "#f6f6f6" }}>
          <Col span={1}>
            <Icon
              type="plus"
              style={{
                fontSize: "30px",
                backgroundColor: "red",
                borderRadius: "50%",
                color: "white"
              }}
            />
          </Col>
          <Col span={4}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Open <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
          <Col span={6}>
            <Form className="login-form">
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your name or SID" }
                  ]
                })(
                  <Input
                    // prefix={
                    // //   <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    // }
                    placeholder="Search by name or SID"
                  />
                )}
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}>
            <Button type="danger">Filter</Button>
          </Col>
        </Row>
        {/* <Divider/> */}
        <hr />
        <Row style={{ backgroundColor: "#f6f6f6" }}>
          <Col span={6}>Account Name</Col>
          <Col span={6}>SID</Col>
        </Row>
        <Row>
          <Col span={6}>hy</Col>
          <Col span={6}>hhgwuqihguyuoiwqyruoiy3 qe982173</Col>
          <Col span={6} offset={6}>
            <Button>Sub Account</Button>
          </Col>
        </Row>
      {/* </div> */}
    </div>
  );
}
export default Form.create({ name: "normal_login" })(SubAccounts);
