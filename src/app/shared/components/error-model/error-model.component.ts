import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-error-model',
  templateUrl: './error-model.component.html',
  styleUrls: ['./error-model.component.sass']
})
export class ErrorModelComponent implements OnInit {

  messages: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.messages = data.error.messages;
    debugger
  }

  ngOnInit(): void {
  }

}
