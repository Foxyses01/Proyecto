import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DatosnPage} from "../datosn/datosn";
import { MuestraPage} from "../muestra/muestra";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos:any;
  DatosnPage = DatosnPage;
  MuestraPage = MuestraPage;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      //this.http.get('/proyecto/proyecto/')
      //.subscribe(data=>{
        //this.contactos=data;
        //console.log(JSON.stringify(data));
      //},error => {
        //console.log(JSON.stringify(error));
      //});
  }
  ionViewWillEnter(){
    this.http.get('/proyecto/proyecto/')
      .subscribe(data=>{
        this.contactos=data;
        console.log(JSON.stringify(data));
      },error => {
        console.log(JSON.stringify(error));
      });
  }

  clickAdd(){
    console.log('Si QUEDO');
    this.navCtrl.push(this.DatosnPage);
  }

  clickFoto(img,nombre,telefono,correo,facebook,twitter,instagram){
    this.navCtrl.push(this.MuestraPage,{img:img, nombre:nombre, telefono:telefono, correo:correo, facebook:facebook, twitter:twitter, instagram:instagram});
  }


}
