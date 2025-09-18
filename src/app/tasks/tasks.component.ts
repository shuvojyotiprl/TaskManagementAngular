import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './new-task/new-task.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent,DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: Math.random().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.id
    });

    this.isAddingTask = false;
  }

  @Input() id?: string;
  @Input() name?: string;
  tasks: any = dummyTasks;
  isAddingTask: boolean = false;

  get selectedUsersTasks() {
    return this.tasks.filter((task: any) => task.userId === this.id);
  }

  onTaskComplete($event: String) {
    console.log('Task completed: ' + $event);
    this.tasks = this.tasks.filter((task: any) => task.id !== $event);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
