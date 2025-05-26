import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpsertModalComponent } from './post-upsert-modal.component';

describe('PostUpsertModalComponent', () => {
  let component: PostUpsertModalComponent;
  let fixture: ComponentFixture<PostUpsertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostUpsertModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUpsertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
