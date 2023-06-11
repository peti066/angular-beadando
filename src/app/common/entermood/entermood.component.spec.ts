import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntermoodComponent } from './entermood.component';

describe('EntermoodComponent', () => {
  let component: EntermoodComponent;
  let fixture: ComponentFixture<EntermoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntermoodComponent]
    });
    fixture = TestBed.createComponent(EntermoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

