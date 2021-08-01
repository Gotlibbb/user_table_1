import React from 'react'
import Table from '../../components/table/table'
import { UserDataType } from '../../data'

const AllUsersTable = (props: { allUsers: UserDataType }) => {
  return (
    <div>
      <Table users={props.allUsers}/>
    </div>
  )
}

export default React.memo(AllUsersTable)
