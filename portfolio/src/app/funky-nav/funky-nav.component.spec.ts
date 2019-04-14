import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyNavComponent } from './funky-nav.component';

describe('FunkyNavComponent', () => {
  let component: FunkyNavComponent;
  let fixture: ComponentFixture<FunkyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
