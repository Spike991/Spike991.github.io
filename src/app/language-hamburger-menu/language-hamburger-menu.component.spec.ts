import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageHamburgerMenuComponent } from './language-hamburger-menu.component';

describe('LanguageHamburgerMenuComponent', () => {
  let component: LanguageHamburgerMenuComponent;
  let fixture: ComponentFixture<LanguageHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageHamburgerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
