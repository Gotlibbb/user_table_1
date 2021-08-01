import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from '../data'
import styled from 'styled-components'

const HelloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const HelloPage = () => {
  return (
    <HelloContainer>
      <h1>
        Hello world.
      </h1>
      <NavLink to={Routes.usersTables}>Show test example</NavLink>
    </HelloContainer>
  )
}

export default HelloPage