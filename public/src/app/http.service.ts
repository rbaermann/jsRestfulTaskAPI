import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks() {
    // let tempObservable = this._http.get("/tasks");
    // tempObservable.subscribe(data => console.log("Got our tasks!", data))
    return this._http.get('/tasks')
  }

  addTask(newTask : any) {
    return this._http.post('/tasks', newTask)
  }

  editTask(editTask : any) {
    return this._http.put(`/tasks/${ editTask._id }`, editTask);
  }

  deleteTask(deleteTask : any) {
    return this._http.delete(`/tasks/${ deleteTask._id }`, deleteTask)
  }
}
