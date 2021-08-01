import React from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { UserDataType } from '../../data'
import { TableBlock } from '../../features/tables/tableStyles'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 75
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 120,
    editable: false,
  },
  {
    field: 'surname',
    headerName: 'Surname',
    width: 120,
    editable: false,
  },
  {
    field: 'favouriteFramework',
    headerName: 'Favourite framework',
    width: 190,
    editable: false,
  }
]

const Table = (props: { users: UserDataType }) => {
  return (
    <TableBlock>
      <DataGrid
        columns={columns}
        disableColumnMenu
        disableSelectionOnClick
        hideFooterSelectedRowCount
        style={{ borderColor: 'black' }}
        rows={props.users}
      />
    </TableBlock>
  )
}

export default Table