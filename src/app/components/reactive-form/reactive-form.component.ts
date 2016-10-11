import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    //***USING FORMGROUP
    // this.myForm=new FormGroup({
    //   empNo: new FormControl('Employee No', [Validators.required, Validators.minLength(4)]),
    //   empName: new FormControl('Employee Name'),
    //   designation: new FormControl('designation')
    // })

    //USING FORMBUILDER
     
    this.myForm= fb.group({
      empNo:['Employee No', [Validators.required, Validators.minLength(4)]],
      empName:['Employee Name', this.validateNumber],
      designation:['0', Validators.pattern('[0-9]+')]
    })
   }
   validateNumber(ctrl: FormControl){
     const numValue= parseInt(ctrl.value);
     const valid= numValue && numValue<10
     return valid ? null :{
       validateDuration:{
         valid:false
       }
     }
   }
  ngOnInit() {
  }
  reset(){
    this.myForm.reset();
  }
  partialUpdate(){
    this.myForm.patchValue({
      empNo:'Patch no',
      empName: 'Patched Name',
      designation: 'Patched Desciption'
    })
  }
  fullUpdate(){
    this.myForm.setValue({
      empNo:'Full no',
      empName: 'Full Name',
      designation: 'Full Desciption'
    })
  }
}
