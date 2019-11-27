import React, { Component } from "react";
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Icon,
  Input,
  Form,
  Button,
  Divider,
  Radio
} from "antd";
import "antd/dist/antd.css";
class APICredentials extends Component {
  state = {
    value: 1,
    value: 2
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    this.validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    };
    this.onChange = e => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value
      });
    };
    return (
      <div>
        <br />
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            <h2>API Credentials</h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={10} style={{ border: "1px solid #d1d1d1" }}>
            <Row style={{ backgroundColor: "#e6e6e6" }} >
              <Col span={12} > LIVE Credentials</Col>
              <Col span={12}>
                <a>Learn about rest API credentials</a>
              </Col>
            </Row>
            <Row type="flex" justify="start" >
              <Col  span={24} style={{textAlign:'start', marginLeft:'2%'}}>ACCOUNT SID</Col>
              <Col  span={24} style={{textAlign:'start', marginLeft:'2%'}}>hgadshfkjhsadfoiu7yer</Col>
              <Col span={24} style={{textAlign:'start', marginLeft:'2%'}}>Used to exercise the REST API</Col>
            </Row>
            <br />
            <Row type="flex" justify="start">
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>AUTH TOKEN</Col>
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>PRIMARY TOKEN</Col><br/>
              <Col span={24}>
                <Form>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your password!"
                        },
                        {
                          validator: this.validateToNextPassword
                        }
                      ]
                    })(<Input.Password />)}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row type="flex" justify="start"> 
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>
                Seconday Token (<a>Promote to primary | Delete this token</a>)
              </Col>
              <Col span={24}>
                <Form>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your password!"
                        },
                        {
                          validator: this.validateToNextPassword
                        }
                      ]
                    })(<Input.Password />)}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col span={10} style={{ border: "1px solid #d1d1d1" }}>
            <Row style={{ backgroundColor: "#e6e6e6" }}>
              <Col span={12} > TEST Credentials</Col>
              <Col span={12}>
                <a>Learn about rest API credentials</a>
              </Col>
            </Row>
            <Row type="flex" justify="start">
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>ACCOUNT SID</Col>
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>hgadshfkjhsadfoiu7yer</Col>
              <Col style={{textAlign:'start', marginLeft:'2%' }} span={24} >Used to exercise the REST API</Col>
            </Row>
            <br />
            <Row type="flex" justify="start">
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>Test Authentication</Col>
              <Col span={24}>
                <Form>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your password!"
                        },
                        {
                          validator: this.validateToNextPassword
                        }
                      ]
                    })(<Input.Password />)}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="start">
              <Col style={{textAlign:'start', marginLeft:'2%'}} span={24}>Keep this somewhere safe and secure</Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            <h2>SSL Certificate Validation</h2>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            Determine if certificate Validation is performed on all Twillo
            originated requests
          </Col>
        </Row>

        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Enable</Radio>
            </Radio.Group>
          </Col>
          <Col>
            <p>
              enforce certificate validation on webhooks from Twillo on your
              service. Twillo not at this time support self-signed certificates.
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={2}>Disable</Radio>
            </Radio.Group>
          </Col>
          <Col>
            <p>
              enforce certificate validation on webhooks from Twillo on your
              service. Twillo not at this time support self-signed certificates.
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%" }}>
            <h2>Public Key Client Validation</h2>
          </Col>
        </Row>
        <Row type="flex" justify="start">
          <Col style={{ marginLeft: "4%",  textAlign:'justify' }}>
            {" "}
            <p> 
              Public Key Client Validation provies an aditional layer of
              security by validation the origin and integration of the request
              being sent to Twillo. This is achived by sharing a public key with
              Twillo and then asigning each request with the associate private
              key.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
// export default APICredentials;
export default Form.create({ name: "normal_login" })(APICredentials);
