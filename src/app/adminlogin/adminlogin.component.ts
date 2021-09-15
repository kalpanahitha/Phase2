import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
AID?:number;
pwd:string='';
validateUser(){}
  constructor() { }

  ngOnInit(): void {
  }

}
