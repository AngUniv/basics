import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees=[
    {name:'Sunil',id: 10},
    {name:'Anirban',id: 12},
    {name:'Rajdeep',id: 11},
    {name:'Mandit',id: 14}
  ];
  constructor(private router:Router, private route: ActivatedRoute) { }
  viewProfile(employee){
    // this.route.navigateByUrl(`/employees/${employee.id}`)
    this.router.navigate(['employees', employee.id], {
      queryParams:{
        name: employee.name
      }
    });
    // this.router.navigate([employee.id], {relativeTo: this.route});
  }
  ngOnInit() {
  }

}
