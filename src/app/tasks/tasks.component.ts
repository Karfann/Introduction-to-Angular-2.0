import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  toggle: boolean = true;

  people: Array<string> = ["Person1","Person2","Person3"];

  num: Array<number> = [7,12,14,11];

  sample = "";

  tasks: Array<string> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onClick(){
    this.toggle = !this.toggle;
  }

  onLoadTasks(){
    this.tasks = this.taskService.getTasks();
  }

  onClearTasks(){
    this.tasks = [];
  }
}
