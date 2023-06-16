import {Redirect, useParams} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";
import {Button, Col, DatePicker, Form, Input, Row} from "antd";
import {ROW_GUTTER} from "../../../../../constants/ThemeConstant";


export const EditUser = (props) => {
    const {id} = useParams()
    const user = props.usersList.find(user => user.id === +id)


    if (!user) return <Redirect exact from={`${props.match.url}`} to={`${APP_PREFIX_PATH}/main/clients/users-list`} />

    return (
        <>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'name': '',
                            'email': '',
                            'username': '',
                            'dateOfBirth': '',
                            'phoneNumber': '',
                            'website': '',
                            'address': '',
                            'city': '',
                            'postcode': ''
                        }
                    }
                    onFinish={()=>{}}
                    onFinishFailed={()=>{}}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                    >
                                        <DatePicker className="w-100"/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Post code"
                                        name="postcode"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

const mapStateToProps = ({users}) => {
    const {usersList} = users
    return {usersList}
}
export default connect(mapStateToProps)(EditUser)