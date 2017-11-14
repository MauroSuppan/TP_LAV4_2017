import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteLaFraseComponent } from './complete-la-frase.component';

describe('CompleteLaFraseComponent', () => {
  let component: CompleteLaFraseComponent;
  let fixture: ComponentFixture<CompleteLaFraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteLaFraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteLaFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
