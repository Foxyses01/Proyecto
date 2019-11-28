import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DatosnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datosn',
  templateUrl: 'datosn.html',
})
export class DatosnPage {
  nombre = "";
  img = "";
  telefono: "";
  correo ="";
  facebook = "";
  twitter = "";
  instagram = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosnPage');
  }

  addContact(){
    console.log('Agregado');

    const contacto= {
      nombre: this.nombre,
      img: this.img,
      correo: this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram
    };

    console.log(JSON.stringify(contacto));

    this.http.post('/proyecto/proyecto/',contacto)
    .subscribe(data=>{
      console.log(JSON.stringify(data));
      this.navCtrl.pop();

    },error=>{
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
    
  }

}
