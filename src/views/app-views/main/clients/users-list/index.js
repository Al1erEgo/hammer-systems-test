import React, { useEffect, useState} from 'react'
import {Card, Table} from 'antd';
import {getUsers} from "../../../../../redux/actions/Users";
import {connect} from "react-redux";
import Loading from "../../../../../components/shared-components/Loading";
import {getFormattedTableData, tableColumns} from "./UsersListData";


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