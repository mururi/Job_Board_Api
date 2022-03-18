import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHttpComponent } from './git-http.component';

describe('GitHttpComponent', () => {
  let component: GitHttpComponent;
  let fixture: ComponentFixture<GitHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
