import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresoInicial: number = 20;
  progresoFinal: number = 10;

  constructor() { }

  ngOnInit() {
  }
  actualizar ( event: number ) {
    console.log('Evento: ', event);
  }

}
