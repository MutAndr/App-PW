import React, { FC } from 'react'
import { ITask } from '../interface'
import TaskCard from '../components/TaskCard'

interface TaskListProps {
  tasks: ITask[]
  onRemove(id: number): void
}

const TaskList: FC<TaskListProps> = ({ tasks, onRemove }) => {
  return (
    <>
      {tasks.map(task => {
          return (
            <div key={task.id}>
              <TaskCard task={task} onRemoveModal={onRemove}/>
              <br/>
            </div>
          )
      })}
    </>
  )
}

export default TaskList