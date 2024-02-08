import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/store/model/Employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeComponent>
  ) {
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
    if (this.employeeForm.valid) {
      const addEmployeeObj: Employee = {
        id: this.employeeForm.get('id')?.value,
        email: this.employeeForm.get('email')?.value,
        name: this.employeeForm.get('name')?.value,
        phone: this.employeeForm.get('phone')?.value,
        location: this.employeeForm.get('location')?.value,
        employeeType: this.employeeForm.get('employeeType')?.value,
        employeeGroup: this.employeeForm.get('employeeGroup')?.value,
        status: this.employeeForm.get('status')?.value,
      };
      console.log(addEmployeeObj);
    }
    this.closePopup();
  }
  closePopup() {
    this.dialogRef.close();
  }
}
