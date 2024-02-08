import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      id: [, Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      employeeType: ['', Validators.required],
      employeeGroup: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  addEmployeeDetails() {
    console.log(this.employeeForm.value);
  }
}
