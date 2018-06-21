import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIopComponent } from './create-iop.component';

describe('CreateIopComponent', () => {
  let component: CreateIopComponent;
  let fixture: ComponentFixture<CreateIopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
