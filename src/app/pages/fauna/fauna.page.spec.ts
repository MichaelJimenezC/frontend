import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaunaPage } from './fauna.page';

describe('FaunaPage', () => {
  let component: FaunaPage;
  let fixture: ComponentFixture<FaunaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FaunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
