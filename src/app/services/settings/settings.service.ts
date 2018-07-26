import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };


  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    console.log('Guardado en el Local Storage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));

  }
  cargarAjustes() {
    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del Local Storage');

      this.aplicarTema( this.ajustes.theme );
    } else {
      console.log('Usando valores por defecto');
    }
  }
  aplicarTema( theme: string) {

    let url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url );

    this.ajustes.theme = theme;
    this.ajustes.themeUrl = url;

    this.guardarAjustes();

  }
}


interface Ajustes {
  themeUrl: string;
  theme: string;
}
