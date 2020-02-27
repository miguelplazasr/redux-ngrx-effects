

import {UsuarioModel} from '../../models/usuario.model';
import * as fromUsuarios from '../actions'; // Contiene todos ls export del index.ts de actiosn

// ToDo: 4. Creacion del state. Como queremos que luzca cuestro estado para manejar usuarios
export interface UsuariosState {
  users: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

// ToDo: Creacion del estado inicial.
const InitState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

// ToDo: 5. Creacion del reducer
export function usuariosReducer( state = InitState, actions: fromUsuarios.usuariosActions ): UsuariosState {

  switch ( actions.type ) {

    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true
      };

    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...actions.usuarios]
      };

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: actions.payload // Se recibe el objeto del error completo
      };


    default:
      return state;
  }

}
