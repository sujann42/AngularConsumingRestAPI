import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  /* This is for fetching and printing data on the console*/

  /*create a list called user to store the data*/
  users: any;
  /*constructor*/
  constructor(private httpComp: HttpClient) { }

  ngOnInit() {
    /*
    This will fetch data from the rest api and display in the console
    */
    const response = this.httpComp.get('https://jsonplaceholder.typicode.com/users');
    response.subscribe((data) => this.users = data);
  }

  /* This is for fetching and printing data on the console*/
  /*
  export class UserComponent implements OnInit {
    constructor(private httpComp: HttpClient) { }

    ngOnInit() {
    /!*
    This will fetch data from the rest api and display in the console
    *!/
    const response = this.httpComp.get('https://jsonplaceholder.typicode.com/users');
    response.subscribe((data) => console.log(data));
  }
  }
  */

}
