import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SageGithubButtonComponent } from './sage-github-button.component';

describe('SageGithubButtonComponent', () => {
  let component: SageGithubButtonComponent;
  let fixture: ComponentFixture<SageGithubButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SageGithubButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SageGithubButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
