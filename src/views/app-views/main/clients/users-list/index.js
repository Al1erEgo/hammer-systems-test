import React, { useEffect, useState} from 'react'
import {Card, Table, Tooltip, Button, Typography} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {getUsers} from "../../../../../redux/actions/Users";
import {connect} from "react-redux";
import Loading from "../../../../../components/shared-components/Loading";
import {Link} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../../../configs/AppConfig";

const getFormattedTableData = (data) => {
    return data?.map(user => ({
        key: user.id,
        info: {name: user.name, username: user.username},
        contacts: {email: user.email, phone: user.phone, website: user.website},
        address: user.address,
        company: user.company,
    }))
}

const tableColumns =  [
        {
            title: 'Клиент',
            dataIndex: 'info',
            render: (info) => (
                <div className="d-flex flex-column">
                    <Typography.Text strong>{info.name}</Typography.Text>
                    <Typography.Text type="secondary">{info.username}</Typography.Text>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.info.name.toLowerCase();
                    b = b.info.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Контакты',
            dataIndex: 'contacts',
            render: (contacts) => (<div className="d-flex flex-column">
                    <Typography.Text strong>{contacts.email}</Typography.Text>
                    <Typography.Text type="secondary">{contacts.phone}</Typography.Text>
                    <Typography.Link>{contacts.website}</Typography.Link>
                </div>
            )
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            render: (address) => (<div className="d-flex flex-column">
                    <Typography.Text strong>{address.city}</Typography.Text>
                    <Typography.Text type="secondary">{address.street}</Typography.Text>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.address.city.toLowerCase();
                    b = b.address.city.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Компания',
            dataIndex: 'company',
            render: (company) => (<div className="d-flex flex-column">
                    <Typography.Text strong>{company.name}</Typography.Text>
                    <Typography.Text type="secondary">{company.catchPhrase}</Typography.Text>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.company.name.toLowerCase();
                    b = b.company.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, user) => (
                <div className="text-left">
                    <Tooltip title="Редактировать профиль">
                        <Link to={`${APP_PREFIX_PATH}/main/clients/edit-user/${user.key}`}>
                            <Button type="primary"
                                    className="mr-2"
                                    icon={<EditOutlined/>}
                                    size="small"
                            />
                        </Link>
                    </Tooltip>
                </div>
            )
        }
    ]


const UsersList = (props) => {
    const {loading, usersList, getUsers} = props
    const [usersToRender, setUsersToRender] = useState([])

    useEffect(()=> {
        getUsers()
    },[getUsers])

    useEffect(()=> {
        usersList && setUsersToRender(getFormattedTableData(usersList))
    },[usersList])

    if (loading) return <Loading cover={'content'} />

    return (
        <Card bodyStyle={{'padding': '0px'}}>
            <Table
                columns={tableColumns}
                dataSource={usersToRender}
                rowKey={'key'}
            />
        </Card>
    )
}

const mapStateToProps = ({users}) => {
    const {loading, usersList} = users
    return {loading, usersList}
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)