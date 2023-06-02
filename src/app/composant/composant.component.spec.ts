import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantComponent } from './composant.component';

describe('ComposantComponent', () => {
  let component: ComposantComponent;
  let fixture: ComponentFixture<ComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposantComponent]
    });
    fixture = TestBed.createComponent(ComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
