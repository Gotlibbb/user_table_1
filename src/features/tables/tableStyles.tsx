import styled from 'styled-components'

export const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttonBlock {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 50px;
  }
`

export const GroupTablesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const TableBlock = styled.div`
  height: 80vh;
  @media screen and (min-width: 992px) {
    width: 520px;
  }
  @media screen and (max-width: 993px) {
    width: 350px;
  }

  margin-bottom: 25px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`