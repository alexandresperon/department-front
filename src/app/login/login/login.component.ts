import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../auth/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  get password(): string {
    return this.#password;
  }

  set password(value: string) {
    this.#password = value;
  }

  get username(): string {
    return this.#username;
  }

  set username(value: string) {
    this.#username = value;
  }

  returnUrl: string;
  #username: string;
  #password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.#username = '';
    this.#password = '';
    this.returnUrl = '/';
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(): void {
    this.authenticationService.login(this.username, this.password)
      .pipe(first())
      .subscribe(() => this.router.navigate([this.returnUrl]));
  }
}
