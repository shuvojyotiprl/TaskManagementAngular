import { Task } from './task/task.model';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './new-task/new-task.model';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
  constructor(private _taskService: TaskService) {}
  

  getUserTasks(userId: string): Task[] {
    return this._taskService.getUserTasks(userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this._taskService.addTask(taskData, userId)
  }
  removeTask(taskId: string) {
    this._taskService.removeTask(taskId)
  }
}
