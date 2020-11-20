import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDataModel} from '../../models/dialog-data.model';

@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.sass']
})
export class ConfirmationModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {
  }

  ngOnInit(): void {
  }

}
