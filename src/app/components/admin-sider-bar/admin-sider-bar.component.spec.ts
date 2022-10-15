import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiderBarComponent } from './admin-sider-bar.component';

describe('AdminSiderBarComponent', () => {
  let component: AdminSiderBarComponent;
  let fixture: ComponentFixture<AdminSiderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSiderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSiderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
