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

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTasksFromService()
  }

  getTasksFromService() {
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data["Task"];
    })
  }
}
