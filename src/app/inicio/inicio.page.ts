import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  }
  

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    {
      icon: 'newspaper-sharp',
      name: 'Alert',
      redirectTo: '/alert'
      },
      {
      icon: 'person-sharp',
      name: 'Input Forms',
      redirectTo: '/input-forms'
      
      },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
