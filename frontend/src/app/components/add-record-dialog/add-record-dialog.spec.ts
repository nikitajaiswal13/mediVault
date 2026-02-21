import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordDialog } from './add-record-dialog';

describe('AddRecordDialog', () => {
  let component: AddRecordDialog;
  let fixture: ComponentFixture<AddRecordDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRecordDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecordDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
