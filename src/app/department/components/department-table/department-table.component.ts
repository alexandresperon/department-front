import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentModel} from '../../models/department.model';
import {MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DepartmentRegisterComponent} from '../department-register/department-register.component';
import {DepartmentService} from '../../services/department.service';
import {KeyValueModel} from '../../../shared/models/keyvalue.model';
import {PageRequestModel} from '../../../shared/models/page-request.model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {PageModel} from '../../../shared/models/page.model';
import {MatSort, Sort} from '@angular/material/sort';
import {ConfirmationModelComponent} from '../../../shared/components/confirmation-model/confirmation-model.component';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.sass']
})
export class DepartmentTableComponent implements OnInit {
  get pagination(): PageRequestModel {
    return this.#pagination;
  }

  set pagination(value: PageRequestModel) {
    this.#pagination = value;
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

  get departmentFilter(): DepartmentModel {
    return this.#departmentFilter;
  }

  set departmentFilter(value: DepartmentModel) {
    this.#departmentFilter = value;
  }

  get depColumns(): string[] {
    return this.#depColumns;
  }

  set depColumns(value: string[]) {
    this.#depColumns = value;
  }

  get departments(): PageModel<DepartmentModel> {
    return this.#departments;
  }

  set departments(value: PageModel<DepartmentModel>) {
    this.#departments = value;
  }

  #departmentFilter: DepartmentModel;
  #pagination: PageRequestModel;
  #departments: PageModel<DepartmentModel>;
  #depColumns: string[];
  #boards: KeyValueModel<number, string>[];
  #states: string[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) datatable!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private departmentService: DepartmentService) {
    this.#boards = [];
    this.#states = [];
    this.#departmentFilter = {address: {address: '', city: '', state: ''}, board: 0, name: ''};
    this.#pagination = {limit: 10, offset: 0, direction: 'ASC', properties: ['id']};
    this.#departments = {content: [], pages: 0, total: 0};
    this.#depColumns = ['id', 'name', 'board', 'address.address', 'address.city', 'address.state', 'action'];
  }

  openDialog(department?: DepartmentModel): void {
    this.dialog.open(DepartmentRegisterComponent, {
      width: '500px',
      data: department ? department : {address: {address: '', city: '', state: 'AC'}, board: 1, name: ''}
    }).afterClosed().subscribe(() => this.refreshTable());
  }

  ngOnInit(): void {
    this.departmentService.getStates().subscribe(res => this.states = res.data);
    this.departmentService.getBoards().subscribe(res => this.boards = res.data);
    this.find();
  }

  find(pagination?: PageRequestModel): void {
    if (!pagination) {
      let size = 10;
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        size = this.paginator.pageSize;
      }
      pagination = {
        limit: size,
        offset: 0,
        direction: 'ASC',
        properties: ['id']
      };
    }
    if (this.sort) {
      pagination.direction = this.sort.direction ? this.sort.direction.toUpperCase() : 'ASC';
      pagination.properties = this.sort.active ? [this.sort.active] : ['id'];
    }
    this.departmentService.getDepartments(this.departmentFilter, pagination).subscribe(res => {
      this.departments = res.data;
      this.datatable.renderRows();
    });
  }

  delete(id: number): void {
    this.dialog.open(ConfirmationModelComponent, {
      width: '300px',
      data: {
        title: 'Remover Departamento',
        content: `Deseja realmente remover o departamento ${this.departments.content.filter(d => d.id === id)[0].name}?`
      }
    }).afterClosed().subscribe(res => {
      if (res === true) {
        this.departmentService.deleteDepartment(id).subscribe(() => this.refreshTable());
      }
    });
  }

  getBoard(i: number): string {
    return this.boards ? this.boards.filter(k => k.key === i)[0].value : '';
  }

  handlerPage(event: PageEvent): void {
    this.find({limit: event.pageSize, offset: event.pageIndex, direction: 'ASC', properties: ['id']});
  }

  sortData(event: Sort): void {
    this.find({
      limit: this.paginator.pageSize, offset: this.paginator.pageIndex,
      direction: event.direction.toUpperCase(), properties: [event.active]
    });
  }

  refreshTable(): void {
    this.find({
      limit: this.paginator.pageSize, offset: this.paginator.pageIndex,
      direction: this.sort.direction.toUpperCase(), properties: [this.sort.active]
    });
  }
}
