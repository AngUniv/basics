import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emp = new employee();
  constructor() { }

  ngOnInit() {
  }

}
export class employee{
  constructor(){
    public empNo:string="";
    public empName:string="";
    public designation:string="";
    public gender: string="";
  }
}