import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DepartmentHeaderComponent} from './department-header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DepartmentHeaderComponent', () => {
  let component: DepartmentHeaderComponent;
  let fixture: ComponentFixture<DepartmentHeaderComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule],
      declarations: [DepartmentHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
