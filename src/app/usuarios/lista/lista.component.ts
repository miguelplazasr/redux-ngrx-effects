import {Component, OnInit} from '@angular/core';

import {UsuarioModel} from '../../models/usuario.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

import * as usuariosActions from '../../store/actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(
    //private usuarioService: UsuarioService ToDo: Nota: Se comneta esta linea porque con Redux no se ustiliza el servicio en este punto
    // ToDo: 10. Importar el store en los componentes
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    // ToDo: Nota: Se comneta esta linea porque con Redux no se ustiliza el servicio en este punto
    //this.usuarioService.getUsers().subscribe( (data: UsuarioModel[]) => this.usuarios = data);

    this.store.dispatch(new usuariosActions.CargarUsuarios());


  }

}
