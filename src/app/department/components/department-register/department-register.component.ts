import {Component, Inject, OnInit} from '@angular/core';
import {DepartmentModel} from '../../models/department.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DepartmentService} from '../../services/department.service';
import {KeyValueModel} from '../../../shared/models/keyvalue.model';

@Component({
  selector: 'app-department-register',
  templateUrl: './department-register.component.html',
  styleUrls: ['./department-register.component.sass']
})
export class DepartmentRegisterComponent implements OnInit {
  get department(): DepartmentModel {
    return this.#department;
  }

  set department(value: DepartmentModel) {
    this.#department = value;
  }

  get states(): string[] {
    return this.#states;
  }

  set states(value: string[]) {
    this.#states = value;
  }

  get boards(): KeyValueModel<number, string>[] {
    return this.#boards;
  }

  set boards(value: KeyValueModel<number, string>[]) {
    this.#boards = value;
  }

  #department: DepartmentModel;
  #boards: KeyValueModel<number, string>[];
  #states: string[];

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DepartmentRegisterComponent>,
              @Inject(MAT_DIALOG_DATA) public departmentDialog: DepartmentModel, private departmentService: DepartmentService) {
    this.#boards = [];
    this.#states = [];
    this.#department = {...departmentDialog, address: {...departmentDialog.address}};
  }

  ngOnInit(): void {
    this.departmentService.getStates().subscribe(res => this.states = res.data);
    this.departmentService.getBoards().subscribe(res => this.boards = res.data);
  }

  save(): void {
    if (this.department.id) {
      this.departmentService.updateDepartment(this.department).subscribe(() => this.exit());
    } else {
      this.departmentService.saveDepartment(this.department).subscribe(() => this.exit());
    }
  }

  exit(): void {
    this.department = {address: {address: '', city: '', state: ''}, board: 0, name: ''};
    this.dialogRef.close();
  }

}
