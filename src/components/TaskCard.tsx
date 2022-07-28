import React, { FC, useState } from 'react'
import { ITask } from '../interface'
import { Card, Button, Modal } from 'react-bootstrap'


interface TaskCardProps {
  task: ITask
  onRemoveModal(id: number): void
}

const TaskCard: FC<TaskCardProps> = ({task, onRemoveModal}) => {
  const [show, setShow] = useState<boolean>(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <Card border="primary" onClick={handleShow}>
        <Card.Body >
          <Card.Title>{task.title}</Card.Title>
          <Card.Footer className="text-muted">
            Комментариев 0
          </Card.Footer>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{task.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{task.discription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onRemoveModal(task.id)}>
            Удалить карточку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskCard