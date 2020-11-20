import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Title} from '@angular/platform-browser';
import {AuthenticationService} from './auth/services/authentication.service';
import {Router} from '@angular/router';
import {UserModel} from './auth/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  user: UserModel | undefined;
  title = 'department-front';
  isShowSpinner: boolean;

  constructor(private titleService: Title, private store: Store<{ spin: number }>, private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
    this.titleService.setTitle('Departamentos');
    this.isShowSpinner = false;
  }

  ngOnInit(): void {
    this.store.select('spin').subscribe(spin => setTimeout(() => this.isShowSpinner = spin > 0, 0));
  }

}
