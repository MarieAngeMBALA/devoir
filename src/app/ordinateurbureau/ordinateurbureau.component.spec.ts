import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurbureauComponent } from './ordinateurbureau.component';

describe('OrdinateurbureauComponent', () => {
  let component: OrdinateurbureauComponent;
  let fixture: ComponentFixture<OrdinateurbureauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinateurbureauComponent]
    });
    fixture = TestBed.createComponent(OrdinateurbureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
