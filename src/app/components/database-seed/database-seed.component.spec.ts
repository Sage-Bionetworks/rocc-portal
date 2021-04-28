import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSeedComponent } from './database-seed.component';

describe('DatabaseSeedComponent', () => {
  let component: DatabaseSeedComponent;
  let fixture: ComponentFixture<DatabaseSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseSeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
