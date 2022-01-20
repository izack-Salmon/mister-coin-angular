import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinAppComponent } from './coin-app.component';

describe('CoinAppComponent', () => {
  let component: CoinAppComponent;
  let fixture: ComponentFixture<CoinAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
