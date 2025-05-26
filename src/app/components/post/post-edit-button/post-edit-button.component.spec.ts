import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditButtonComponent } from './post-edit-button.component';

describe('PostEditButtonComponent', () => {
  let component: PostEditButtonComponent;
  let fixture: ComponentFixture<PostEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostEditButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
