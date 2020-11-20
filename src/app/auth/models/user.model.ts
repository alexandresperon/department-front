import {AuthorityModel} from './authority.model';

export interface UserModel {
  name: string;
  authorities: AuthorityModel[];
  authData: string;
}
