import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredDescription,
      date: this.enteredDate
    });
  }
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>()

  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
