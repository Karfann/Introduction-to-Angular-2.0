import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  onComplete(task){
    task.completed = true;
  }

}
