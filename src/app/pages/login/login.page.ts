import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, ModalController} from '@ionic/angular';
import { IonModalAgregarFotosPage } from '../ion-modal-agregar-fotos/ion-modal-agregar-fotos.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

}
