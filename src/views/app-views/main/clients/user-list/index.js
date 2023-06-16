import React, {Component, useEffect, useState} from 'react'
import {Card, Table, Tag, Tooltip, message, Button, Typography} from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {getUsers} from "../../../../../redux/actions/Users";
import {connect} from "react-redux";
import Loading from "../../../../../components/shared-components/Loading";


export class UserList extends Component {

    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    render() {
        const { users, userProfileVisible, selectedUser } = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Role',
                dataIndex: 'role',
                sorter: {
                    compare: (a, b) => a.role.length - b.role.length,
                },
            },
            {
                title: 'Last online',
                dataIndex: 'lastOnline',
                render: date => (
                    <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
                ),
                sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
            },
            {
                title: 'Status',
                dataIndex: 'status',
                render: status => (
                    <Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
                ),
                sorter: {
                    compare: (a, b) => a.status.length - b.status.length,
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>
                <Table columns={tableColumns} dataSource={users} rowKey='id' />
                <UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
            </Card>
        )
    }
}

const getFormattedTableData = (data) => {
    return data?.map(user => ({
        key: user.id,
        info: {name: user.name, username: user.username},
        contacts: {email: user.email, phone: user.phone, website: user.website},
        address: user.address,
        company: user.company,
    }))
}

const tableColumns = [
    {
        title: 'Клиент',
        dataIndex: 'info',
        render: (info) => (
            <div className="d-flex flex-column">
                <Typography.Text strong>{info.name}</Typography.Text>
                <Typography.Text type="secondary">{info.username}</Typography.Text>
            </div>
        )
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
        )
    },
    {
        title: 'Компания',
        dataIndex: 'company',
        render: (company) => (<div className="d-flex flex-column">
                <Typography.Text strong>{company.name}</Typography.Text>
                <Typography.Text type="secondary">{company.catchPhrase}</Typography.Text>
            </div>
        )
    }
]


const UserList2 = (props) => {
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
            {/*<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList2)