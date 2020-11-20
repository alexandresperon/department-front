import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorModelComponent} from './error-model.component';
import {provideMockStore} from '@ngrx/store/testing';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgZone} from '@angular/core';
import {Observable} from 'rxjs';

describe('ErrorModelComponent', () => {
  let component: ErrorModelComponent;
  let fixture: ComponentFixture<ErrorModelComponent>;

  beforeEach(async () => {
    let mockService = { run: () => {}};
    await TestBed.configureTestingModule({
      declarations: [ErrorModelComponent],
      providers: [provideMockStore(),
        {provide: MAT_DIALOG_DATA, useValue: {error: {messages: []}}},
        {provide: MatDialogRef, useValue: {}},
        {provide: NgZone, useValue: mockService}]
    })
      .compileComponents();
    // @ts-ignore
    spyOn(mockService, 'run').and.returnValue({ subscribe: () => {} });
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
