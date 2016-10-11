import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription'
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employeeId:number;
  name:string;
  paramSub: Subscription;
  queryparamSub: Subscription
  constructor(private route: ActivatedRoute) {
    // this.employeeId=parseInt(route.snapshot.params['id']);
    this.paramSub=route.params.subscribe(params=>this.employeeId=parseInt(params['id']));
    this.queryparamSub=route.queryParams.subscribe(params=> this.name=params["name"]);
   }
  previous(){
    return this.employeeId-1;
  }
  next(){
    return this.employeeId+1;
  }

  ngOnInit() {
  }
  //TO PREVENT MEMORY LEAKS
  ngOnDestroy(){
    this.paramSub.unsubscribe();
    this.queryparamSub.unsubscribe();
  }
}
