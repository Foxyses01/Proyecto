import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MuestraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muestra',
  templateUrl: 'muestra.html',
})
export class MuestraPage {
  img:"";
  nombre:"";
  telefono:"";
  correo:"";
  facebook:"";
  twitter:"";
  instagram:"";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.get('img');
    this.nombre = navParams.get('nombre');
    this.telefono = navParams.get('telefono');
    this.correo = navParams.get('correo');
    this.facebook = navParams.get('facebook');
    this.twitter = navParams.get('twitter');
    this.instagram = navParams.get('instagram');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuestraPage');
  }


}
