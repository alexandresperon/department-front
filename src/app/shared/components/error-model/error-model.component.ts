import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-error-model',
  templateUrl: './error-model.component.html',
  styleUrls: ['./error-model.component.sass']
})
export class ErrorModelComponent implements OnInit {

  messages: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ErrorModelComponent>, private ngZone: NgZone) {
    this.messages = data.error.messages;
  }

  ngOnInit(): void {
  }

  exit(): void {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}
