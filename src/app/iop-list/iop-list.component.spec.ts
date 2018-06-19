import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IopListComponent } from './iop-list.component';

describe('IopListComponent', () => {
  let component: IopListComponent;
  let fixture: ComponentFixture<IopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
