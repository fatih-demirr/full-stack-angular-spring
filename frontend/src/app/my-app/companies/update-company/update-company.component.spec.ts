import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyComponent } from './update-company.component';

describe('UserProfileComponent', () => {
  let component: UpdateCompanyComponent;
  let fixture: ComponentFixture<UpdateCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
