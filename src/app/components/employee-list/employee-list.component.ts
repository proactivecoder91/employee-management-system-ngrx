import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  constructor(private dialog: MatDialog) {}
  addEmployeePopup() {
    this.openPopup();
  }

  openPopup() {
    this.dialog.open(AddEmployeeComponent, {
      width: '45%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
