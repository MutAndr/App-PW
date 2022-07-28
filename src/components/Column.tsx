import React, { FC, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { ITask } from '../interface'

interface ColumnProps {
  children: string
}

const Column: FC<ColumnProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addHandler = (title: string) => {
    const newTask: ITask = {
      title: title,
      discription: 'Описание карточки',
      id: Date.now()
    }
    setTasks(prev => [...prev, newTask])
  }

  const removeHandler = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <Col>
      <Form.Control defaultValue={children}></Form.Control>
      <br />
      <br />
      <TaskList tasks={tasks} onRemove={removeHandler}/>
      <TaskForm onAdd={addHandler}/>
    </Col>
  )
}

export default Column