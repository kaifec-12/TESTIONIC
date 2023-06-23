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
          name:'Nombre',
          type:'text',
          placeholder: 'Nombres',
        },
        {
          name:'Apellido',
          type:'text',
          placeholder: 'Apellidos',

        },
        {
          name:'Descripcion',
          type:'textarea',
          placeholder: 'Descripcion Materia',

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
          name:'Clave',
          type:'password',
          placeholder: 'Clave',
          cssClass:'specialClass',
          attributes:{
            maxlength:4,
            inputmode:'decimal',
          }

        },
        {
          name:'Nickname',
          type:'text',
          placeholder: 'Nickname (max 8 characters)',

        },
        {
          name:'Edad',
          type:'number',
          placeholder: 'Edad',

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
