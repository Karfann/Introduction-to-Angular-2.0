import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
    
  tasks: Array<string> = ["First Task", "Second Task", "Third Task"];
  //tasks: Array<string>;
  constructor(private http: Http) { }

  getTasks(){
    return this.tasks;
  }

  // getTasks() {
  //   var aPromise = this.http.get("./../tasks.json")
  //   .map((response: Response) => response.json().data)
  //   .toPromise()

  //   aPromise.then(tasks => this.tasks = tasks);
  // }

}
