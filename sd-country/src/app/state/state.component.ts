import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  c = {
    country: ''
  };
  data;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .post<any>(
        "https://countriesnow.space/api/v0.1/countries/states",
        this.c
      )
      .subscribe(state => {
        this.data = state;
        console.log(state)
      });
  }
}



