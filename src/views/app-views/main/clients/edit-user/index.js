import {Redirect, useHistory, useParams} from "react-router-dom";
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";
import {Button, Card, Col, Form, Input, Row} from "antd";
import {ROW_GUTTER} from "../../../../../constants/ThemeConstant";
import Loading from "../../../../../components/shared-components/Loading";


export const EditUser = (props) => {
    const [loading, setLoading] = useState(false)
    const {usersList, history} = props
    const {id} = useParams()
    const user = usersList.find(user => user.id === +id)

    const onSubmit = () => {
        setLoading(true)
    }

    useEffect(()=>{
        if(loading){setTimeout(()=>{
            history.push(`${APP_PREFIX_PATH}/main/clients/users-list`)
        }, 2000)}
    },[loading])

    if (loading) return <Loading cover={'content'} />

    if (!user) return <Redirect exact from={`${props.match.url}`} to={`${APP_PREFIX_PATH}/main/clients/users-list`} />

    const {
        name,
        username,
        email,
        phone,
        website,
        address: {city, street},
        company: {name: companyName, catchPhrase}
    } = user

    return (
        <Card title={'Редактирование профиля'} bodyStyle={{'padding': '20px'}}>
            <div>
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'name': name,
                            'email': email,
                            'username': username,
                            'dateOfBirth': '',
                            'phoneNumber': phone,
                            'website': website,
                            'address': street,
                            'city': city,
                            'companyName': companyName,
                            'catchPhrase': catchPhrase,
                        }
                    }
                    onFinish={onSubmit}
                    onFinishFailed={()=>{}}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Имя"
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
                                        label="Никнейм"
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
                                        label="Электронная почта"
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
                                        label="Номер телефона"
                                        name="phoneNumber"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Вебсайт"
                                        name="website"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Адрес"
                                        name="address"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Город"
                                        name="city"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Компания"
                                        name="companyName"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Слоган"
                                        name="catchPhrase"
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
        </Card>
    )
}

const mapStateToProps = ({users}) => {
    const {usersList} = users
    return {usersList}
}
export default connect(mapStateToProps)(EditUser)