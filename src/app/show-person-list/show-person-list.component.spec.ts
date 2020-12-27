import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonListComponent } from './show-person-list.component';

describe('ShowPersonListComponent', () => {
  let component: ShowPersonListComponent;
  let fixture: ComponentFixture<ShowPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
