import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerdaDeComponent } from './acerda-de.component';

describe('AcerdaDeComponent', () => {
  let component: AcerdaDeComponent;
  let fixture: ComponentFixture<AcerdaDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcerdaDeComponent]
    });
    fixture = TestBed.createComponent(AcerdaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
