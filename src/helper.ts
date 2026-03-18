export function dateToYYYYMMDD(date: Date): string | undefined {
  // Helper method to format date to 'YYYY-MM-DD'
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0]
}

export function dateTrim(rawDate: Date, addOffset: boolean = false): Date {
  const date = addOffset
    ? new Date(rawDate.getTime() + rawDate.getTimezoneOffset() * 60000)
    : rawDate
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function randomColor(): string {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`
}

import type { Task } from '@/schemas/task'
export enum SortOption {
  Name = 'name',
  Created = 'created',
  Due = 'due',
}

export function sortTasks(tasks: Task[], sortOption: SortOption): Task[] {
  return [...tasks].sort((a, b) => {
    switch (sortOption) {
      case SortOption.Name:
        return a.title.localeCompare(b.title)

      case SortOption.Created:
        return a.id - b.id

      case SortOption.Due:
        return a.dueDate.getTime() - b.dueDate.getTime()

      default:
        return 0
    }
  })
}
