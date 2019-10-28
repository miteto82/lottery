import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLottoComponent } from './list-lotto.component';

describe('ListLottoComponent', () => {
  let component: ListLottoComponent;
  let fixture: ComponentFixture<ListLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
