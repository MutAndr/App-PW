import React, { FC, useState} from 'react'
import { Form } from 'react-bootstrap'

interface TaskFormProps {
  onAdd(title: string): void
}

const TaskForm: FC<TaskFormProps> = (props) => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('')
    }
  }

  return (
    <Form.Control 
      onChange={changeHandler} 
      onKeyPress={keyPressHandler}
      value={title} 
      placeholder='Ввести заголовок для новой карточки'>
    </Form.Control>
  )
}

export default TaskForm