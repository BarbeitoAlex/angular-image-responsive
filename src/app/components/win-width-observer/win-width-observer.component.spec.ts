import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinWidthObserverComponent } from './win-width-observer.component';

describe('WinWidthObserverComponent', () => {
  let component: WinWidthObserverComponent;
  let fixture: ComponentFixture<WinWidthObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinWidthObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinWidthObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
