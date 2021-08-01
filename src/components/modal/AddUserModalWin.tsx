import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { ModalContent } from '../../features/tables/tableStyles'


function getModalStyle () {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
      borderRadius: 5
    },
  }),
)

type AddUserModalWinPropsType = {
  addUserBtnHandler: (nm: string, snm: string, group: 'React' | 'Angular' | 'Vue' | '') => void
}

const AddUserModalWin = (props: AddUserModalWinPropsType) => {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [nm, setNm] = useState<string>('')
  const [snm, setSnm] = useState<string>('')
  const [grope, setGrope] = useState<'React' | 'Angular' | 'Vue' | ''>('React')

  const addUser = () => {
    props.addUserBtnHandler(nm, snm, grope)
    handleClose()
    setNm('')
    setSnm('')
    setGrope('')
  }

  const handleChange = (event: React.ChangeEvent<{ value: 'React' | 'Angular' | 'Vue' | '' }>) => {

    setGrope(event.target.value)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ModalContent>
        <h2 id='simple-modal-title'>Add user</h2>
        <div style={{ width: '220px' }}>
          <TextField id='filled-basic' label='Name' variant='filled' value={nm} onChange={e => setNm(e.target.value)}/>
        </div>
        <div style={{ width: '220px' }}>
          <TextField id='filled-basic' label='Surname' variant='filled' value={snm}
                     onChange={e => setSnm(e.target.value)}/>
        </div>


        <div>
          <FormControl variant='filled' style={{ width: '220px' }}>

            <InputLabel id='demo-simple-select-filled-label'>Framework</InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={grope}
              // @ts-ignore
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'React'}>React</MenuItem>
              <MenuItem value={'Angular'}>Angular</MenuItem>
              <MenuItem value={'Vue'}>Vue</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button
          variant='contained'
          color='primary'
          style={{ width: '130px', marginTop: 15 }}
          onClick={addUser}
        >
          Add
        </Button>
      </ModalContent>
    </div>
  )


  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  )
}

export default React.memo(AddUserModalWin)
