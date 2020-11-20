import {ErrorHandler, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ErrorModelComponent} from '../shared/components/error-model/error-model.component';
import {AuthenticationService} from '../auth/services/authentication.service';

@Injectable()
export class ErrorHandlerImpl implements ErrorHandler {

  #dialogOpen: boolean;

  constructor(public dialog: MatDialog, private authenticationService: AuthenticationService) {
    this.#dialogOpen = false;
  }

  handleError(error: any): void {
    if ([401, 403].indexOf(error.status) !== -1) {
      this.authenticationService.logout();
    } else if (error.error && error.error.messages && !this.#dialogOpen) {
      this.#dialogOpen = true;
      this.dialog.open(ErrorModelComponent, {
        width: '500px',
        data: error
      }).afterClosed().subscribe(() => this.#dialogOpen = false);
    } else if (error.status === 0 && !this.#dialogOpen) {
      this.#dialogOpen = true;
      this.dialog.open(ErrorModelComponent, {
        width: '500px',
        data: {error: {messages: ['Servidor indisponível no momento.']}}
      }).afterClosed().subscribe(() => this.#dialogOpen = false);
    } else {
      console.error(error);
    }
  }
}
