import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-home',
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Estadísticas',
                icon: 'pi pi-fw pi-chart-pie',
                items: [
                    {label: 'Gastos',
                    icon: 'pi pi-fw pi-chart-bar',
                    items: [
                      {label: 'Agua'},
                      {label: 'Luz'}
                    ]
                  },

                    {label: 'Ingresos', icon: 'pi pi-fw pi-chart-line'},
                    
                ]
            }
        ];
    }
}


