import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DepartmentModel} from '../models/department.model';
import {Observable} from 'rxjs';
import {ResponseModel} from '../../shared/models/response.model';
import {KeyValueModel} from '../../shared/models/keyvalue.model';
import {PageModel} from '../../shared/models/page.model';
import {PageRequestModel} from '../../shared/models/page-request.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly url: string = environment.url;

  constructor(private http: HttpClient) {
  }

  getDepartments(department: DepartmentModel, pagination: PageRequestModel): Observable<ResponseModel<PageModel<DepartmentModel>>> {
    let params = new HttpParams().set('name', department.name)
      .set('board', department.board.toString()).set('address.address', department.address.address)
      .set('address.city', department.address.city).set('address.state', department.address.state)
      .set('limit', pagination.limit.toString()).set('offset', pagination.offset.toString())
      .set('direction', pagination.direction).set('properties', pagination.properties.toString());
    if (department.id) {
      params = params.set('id', department.id.toString());
    }

    return this.http.get<ResponseModel<PageModel<DepartmentModel>>>(`${this.url}/departments`, {params});
  }

  getDepartment(id: number): Observable<ResponseModel<DepartmentModel>> {
    return this.http.get<ResponseModel<DepartmentModel>>(`${this.url}/departments/${id}`);
  }

  saveDepartment(department: DepartmentModel): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(`${this.url}/departments`, department);
  }

  updateDepartment(department: DepartmentModel): Observable<ResponseModel<any>> {
    return this.http.put<ResponseModel<any>>(`${this.url}/departments/${department.id}`, department);
  }

  deleteDepartment(id: number): Observable<ResponseModel<any>> {
    return this.http.delete<ResponseModel<any>>(`${this.url}/departments/${id}`);
  }

  getBoards(): Observable<ResponseModel<KeyValueModel<number, string>[]>> {
    return this.http.get<ResponseModel<KeyValueModel<number, string>[]>>(`${this.url}/boards`);
  }

  getStates(): Observable<ResponseModel<string[]>> {
    return this.http.get<ResponseModel<string[]>>(`${this.url}/states`);
  }

}
