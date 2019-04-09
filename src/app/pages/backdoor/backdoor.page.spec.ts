import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdoorPage } from './backdoor.page';

describe('BackdoorPage', () => {
  let component: BackdoorPage;
  let fixture: ComponentFixture<BackdoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdoorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
