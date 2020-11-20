import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../auth/services/authentication.service';
import {UserModel} from '../../../auth/models/user.model';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.sass']
})
export class DepartmentHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }

  user(): UserModel {
    return this.authenticationService.userValue;
  }
}
