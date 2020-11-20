import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartmentRegisterComponent} from './components/department-register/department-register.component';
import {DepartmentTableComponent} from './components/department-table/department-table.component';
import {DepartmentHeaderComponent} from './components/department-header/department-header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorIntlProvider} from './providers/mat-paginator-intl.provider';

@NgModule({
  declarations: [DepartmentRegisterComponent, DepartmentTableComponent, DepartmentHeaderComponent],
  exports: [
    DepartmentRegisterComponent,
    DepartmentTableComponent,
    DepartmentHeaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlProvider}]
})
export class DepartmentModule {
}
