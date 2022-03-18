import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDisplayComponent } from './git-display.component';

describe('GitDisplayComponent', () => {
  let component: GitDisplayComponent;
  let fixture: ComponentFixture<GitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
