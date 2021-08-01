import React, { useState } from 'react'
import AllUsersTable from './AllUsersTable'
import GroupUsersTables from './GroupUsersTables'
import { userData, UserDataType } from '../../data'
import AddUserModalWin from '../../components/modal/AddUserModalWin'
import { Button } from '@material-ui/core'
import { TablesContainer } from './tableStyles'

const UsersTablesContainer = () => {

  const [toggleTable, setToggleTable] = useState<boolean>(true)

  const setTablesView = () => {
    setToggleTable(x => !x)
  }

  const [users, setUsers] = useState<UserDataType>(userData)

  const groupReact: UserDataType = []
  const groupAngular: UserDataType = []
  const groupVue: UserDataType = []
  const groupJQuery: UserDataType = []

  users.filter((x) => {
    x.favouriteFramework === 'React' && groupReact.push(x)
    x.favouriteFramework === 'Angular' && groupAngular.push(x)
    x.favouriteFramework === 'Vue' && groupVue.push(x)
    x.favouriteFramework === 'jQuery' && groupJQuery.push(x)
    return x
  })

  const addUser = (nm: string, snm: string, group: 'React' | 'Angular' | 'Vue' | '') => {
    setUsers(x => [...x, {
      name: nm,
      surname: snm,
      favouriteFramework: group,
      id: String(x.length + 1)
    }])
  }


  return (
    <TablesContainer>
      <div className={'buttonBlock'}>
        <Button
          variant='contained'
          onClick={setTablesView}>
          {toggleTable ? 'Sort users to group' : 'Show all users in one table'}
        </Button>
        <AddUserModalWin addUserBtnHandler={addUser}/>
      </div>
      {toggleTable ?
        <AllUsersTable
          allUsers={users}
        /> :
        <GroupUsersTables
          groupAngular={groupAngular}
          groupJQuery={groupJQuery}
          groupVue={groupVue}
          groupReact={groupReact}/>
      }
    </TablesContainer>
  )
}

export default UsersTablesContainer
