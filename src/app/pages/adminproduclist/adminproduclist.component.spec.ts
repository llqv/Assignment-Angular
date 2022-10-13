import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproduclistComponent } from './adminproduclist.component';

describe('AdminproduclistComponent', () => {
  let component: AdminproduclistComponent;
  let fixture: ComponentFixture<AdminproduclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproduclistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminproduclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
