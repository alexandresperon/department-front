import {ErrorHandler, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ErrorModelComponent} from '../shared/components/error-model/error-model.component';

@Injectable()
export class ErrorHandlerImpl implements ErrorHandler {

  #dialogOpen: boolean;

  constructor(public dialog: MatDialog) {
    this.#dialogOpen = false;
  }

  handleError(error: any): void {
    if (error.error && error.error.messages && !this.#dialogOpen) {
      this.#dialogOpen = true;
      this.dialog.open(ErrorModelComponent, {
        width: '500px',
        data: error
      }).afterClosed().subscribe(() => this.#dialogOpen = false);
    } else {
      console.error(error);
    }
  }
}
