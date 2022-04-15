import { ComponentFixture,TestBed } from '@angular/core/testing';

import { QuoteFormComponent } from './quote-form.component';

describe('QuoteFormComponent', () => {
  let Component: QuoteFormComponent;
  let fixture: ComponentFixture<QuoteFormComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteFormComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture =TestBed.createComponent(QuoteFormComponent);
    Component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create', () => {
      expect(Component).toBeTruthy();
    });
});