import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    
  tasks: Array<string> = ["First Task", "Second Task", "Third Task"];

  constructor() { }

  getTasks(): Array<string> {
    return this.tasks;
  }

}
