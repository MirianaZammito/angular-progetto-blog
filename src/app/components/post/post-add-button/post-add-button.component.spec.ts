import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddButtonComponent } from './post-add-button.component';

describe('PostAddButtonComponent', () => {
  let component: PostAddButtonComponent;
  let fixture: ComponentFixture<PostAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostAddButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
