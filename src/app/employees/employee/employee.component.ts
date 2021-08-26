import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService) { }
  departments= [
    {id:3, value:'Computer Science'},
    {id:2, value:'psyiology'},
    {id:3, value:'BBA'},
  ];

  ngOnInit(): void {
    this.service.getEmployees();
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup()

  }
  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmployee(this.service.form.value)
      this.service.form.reset()
    }
  }
}
