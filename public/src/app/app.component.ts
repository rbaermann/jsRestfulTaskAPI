import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks = [];
  info : any;
  newTask : any;
  editTask : any;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.newTask = { title : "", description : "" }
  }

  getTasksFromService() {
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data["Task"];
    })
  }

  taskinfo(task : any) {
    this.info = task;
    return this.info;
  }

  onSubmit() {
    let obs = this._httpService.addTask(this.newTask);
    obs.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = { title : "", description : "" }
    })
  }

  onEdit() {
    let obs = this._httpService.editTask(this.editTask);
    obs.subscribe(data => {
      console.log("Updated selected task", data);
      this.editTask = { title : "", description : "" };
    })
  }

  editSelected(task) {
    this.editTask = task;
  }

  deleteTask(task) {
    let obs = this._httpService.deleteTask(task);
    obs.subscribe(data => {
      console.log("Deleted selected task", data);
      this.getTasksFromService();
    })
  }
}
