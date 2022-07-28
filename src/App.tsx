import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'
import Column from './components/Column'

const App: FC = () => {

  return (
    <Container>
      <Row>
        <Column>TODO</Column>
        <Column>In Progress</Column>
        <Column>Testing</Column>
        <Column>Done</Column>
      </Row>
    </Container>
  )
}

export default App