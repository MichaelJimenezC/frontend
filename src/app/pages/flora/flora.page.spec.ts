import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloraPage } from './flora.page';

describe('FloraPage', () => {
  let component: FloraPage;
  let fixture: ComponentFixture<FloraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FloraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
