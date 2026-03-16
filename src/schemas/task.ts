import { ArrayDataManager, IdArrayDataManager } from '@/data'
import z from 'zod'
import { subtaskManager } from './subtask'
import { timeEntryManager } from './timeEntry'

const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  category: z.number(),
  dueDate: z.coerce.date(),
  created: z.coerce.date(),
})

export type Task = z.infer<typeof taskSchema>
export type CreateTask = Omit<Task, 'id'>

export const taskManager = new IdArrayDataManager(taskSchema, 'task')
export const deletedTaskManager = new ArrayDataManager(taskSchema, 'task-deleted', {
  onDelete: (tasks) => {
    subtaskManager.removeBy(
      (x) => tasks.some((t) => t.id === x.taskId) && !taskManager.someBy('id', x.taskId),
    )
    timeEntryManager.removeBy(
      (x) => tasks.some((t) => t.id === x.taskId) && !taskManager.someBy('id', x.taskId),
    )
  },
})

subtaskManager.removeBy(
  (x) => !taskManager.someBy('id', x.taskId) && !deletedTaskManager.someBy('id', x.taskId),
)
timeEntryManager.removeBy(
  (x) => !taskManager.someBy('id', x.taskId) && !deletedTaskManager.someBy('id', x.taskId),
)
