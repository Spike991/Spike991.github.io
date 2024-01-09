import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumvitaeComponent } from './curriculumvitae.component';

describe('CurriculumvitaeComponent', () => {
  let component: CurriculumvitaeComponent;
  let fixture: ComponentFixture<CurriculumvitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumvitaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumvitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
