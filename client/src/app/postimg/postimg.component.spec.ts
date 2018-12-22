import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostimgComponent } from './postimg.component';

describe('PostimgComponent', () => {
  let component: PostimgComponent;
  let fixture: ComponentFixture<PostimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
