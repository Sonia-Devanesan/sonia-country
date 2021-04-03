import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  countries: any

  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.http.get('http://vocab.nic.in/rest.php/country/json')
    .subscribe(Response => {
      console.log(Response);
      this.countries=Response;
    });
  }
 
}



