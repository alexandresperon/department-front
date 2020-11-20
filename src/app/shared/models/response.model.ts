import {StatusEnum} from '../enums/status.enum';

export interface ResponseModel<T> {
  data: T;
  status: StatusEnum;
  messages: string[];
}
