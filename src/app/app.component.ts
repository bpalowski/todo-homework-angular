import { Component } from '@angular/core';
import { Task } from './models/task.model';


@Component({
  selector: 'todo-epicodus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = "Brian's To Do List";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Pet the doggo'),
    new Task('Hug the doggo'),
    new Task('Quit your job'),
    new Task('Fight god')
  ];
}
