import {AddressModel} from './address.model';

export interface DepartmentModel {
  id?: number;
  name: string;
  address: AddressModel;
  board: number;
}
