import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-success-model',
  templateUrl: './success-model.component.html',
  styleUrls: ['./success-model.component.sass']
})
export class SuccessModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SuccessModelComponent>, private ngZone: NgZone) {
  }

  ngOnInit(): void {
  }

  exit(): void {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}
