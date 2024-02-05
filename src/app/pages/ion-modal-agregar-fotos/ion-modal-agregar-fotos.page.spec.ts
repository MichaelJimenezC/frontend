import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonModalAgregarFotosPage } from './ion-modal-agregar-fotos.page';

describe('IonModalAgregarFotosPage', () => {
  let component: IonModalAgregarFotosPage;
  let fixture: ComponentFixture<IonModalAgregarFotosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonModalAgregarFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
