import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {

    this.colocarCheck();
  }
  themeChange(theme: string, link: any ) {
    this.themeCheck( link );
    // Constructor del link de estilos según el seleccionado
    this._ajustes.aplicarTema( theme );

  }
  themeCheck( link: any ) {
    // se recorren todos los selectores y se elimina la clase working con ello el check sí hubiera
    let selectores: any = document.getElementsByClassName( 'selector' );
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    // Se agrega el check al seleccionar un theme
    link.classList.add('working');
  }

  // Agregar el check de acuerdo al theme guardado en local storage.
  colocarCheck() {
    let selectores: any = document.getElementsByClassName( 'selector' );

    let theme = this._ajustes.ajustes.theme;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
