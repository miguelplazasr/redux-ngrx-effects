import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {UsuarioModel} from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(
    //private usuarioService: UsuarioService ToDo: Nota: Se comneta esta linea porque con Redux no se ustiliza el servicio en este punto
  ) { }

  ngOnInit() {
    // ToDo: Nota: Se comneta esta linea porque con Redux no se ustiliza el servicio en este punto
    //this.usuarioService.getUsers().subscribe( (data: UsuarioModel[]) => this.usuarios = data);
  }

}
