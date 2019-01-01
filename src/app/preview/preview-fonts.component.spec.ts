import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFontsComponent } from './preview-fonts.component';

describe('PreviewFontsComponent', () => {
  let component: PreviewFontsComponent;
  let fixture: ComponentFixture<PreviewFontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
