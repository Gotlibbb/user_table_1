import React from 'react'
import { Route } from 'react-router-dom'
import HelloPage from './features/HelloPage'
import UsersTablesContainer from './features/tables/UsersTablesContainer'
import { Routes } from './data'

const App = () => {

  return <div>
    <Route path={'/user_table_1/'} exact render={() => <HelloPage/>}/>
    <Route path={Routes.usersTables} render={() => <UsersTablesContainer/>}/>
  </div>
}

export default App
