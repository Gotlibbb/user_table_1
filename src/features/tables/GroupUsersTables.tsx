import React from 'react'
import Table from '../../components/table/table'
import { UserDataType } from '../../data'
import { GroupTablesContainer } from './tableStyles'

type GroupUsersTablePropsType = {
  groupReact: UserDataType
  groupAngular: UserDataType
  groupVue: UserDataType
  groupJQuery: UserDataType
}

const GroupUsersTables = (props: GroupUsersTablePropsType) => {
  return (
    <GroupTablesContainer>
      <Table users={props.groupReact}/>
      <Table users={props.groupAngular}/>
      <Table users={props.groupVue}/>
      <Table users={props.groupJQuery}/>
    </GroupTablesContainer>
  )
}

export default React.memo(GroupUsersTables)
