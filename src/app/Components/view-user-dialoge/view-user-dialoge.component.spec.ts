import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDialogeComponent } from './view-user-dialoge.component';

describe('ViewUserDialogeComponent', () => {
  let component: ViewUserDialogeComponent;
  let fixture: ComponentFixture<ViewUserDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
