import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  onClick(){
    this.presentAlertPrompt();
  }

  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Prompt!',
      inputs:[
        {
          name:'NOMBRE',
          type:'text',
          placeholder: 'NOMBRES',
        },
        {
          name:'APELLIDO',
          type:'text',
          placeholder: 'APELLIDOS',

        },
        {
          name:'DESCRIPCIÓN',
          type:'textarea',
          placeholder: 'DESCRIPCIÓN DE LA MATERIA',

        },
        {
          name:'Link',
          type:'url',
          value: 'https://ionicframework.com'
        },
        {
          name:'Fecha',
          type:'date',
          value: 'dd/mm/aaaa',
          cssClass: 'icon',
        },
       
        {
          name:'CLAVE',
          type:'password',
          placeholder: 'CLAVE',
          cssClass:'specialClass',
          attributes:{
            maxlength:5,
            inputmode:'decimal',
          }

        },
        {
          name:'NICKNAME',
          type:'text',
          placeholder: 'NICKNAME (MAX 8 CHARACTERS)',

        },
        {
          name:'EDAD',
          type:'number',
          placeholder: 'EDAD',

        },
      ],
      buttons:[
        {
          text:'CANCEL',
          role:'cancel',
          cssClass:'secondary',
          handler: ()=>{
            console.log('Confirm Cancel')
          }
        },
        {
          text:'OK',
          handler: ()=>{
            console.log('Confirm Ok')
          }
        }

      ]
    });
    await alert.present();
    
  }

  ngOnInit() {
  }

}
