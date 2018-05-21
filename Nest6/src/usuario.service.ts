<<<<<<< HEAD
import {Injectable} from '@nestjs/common';
=======

import {Injectable} from "@nestjs/common";
>>>>>>> a503670c99869a4176ce5836cc82f5e00efc5573

@Injectable()
export class UsuarioService {
    usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }

    mostrarUsuarios(): Usuario[] {
        return this.usuarios;
    }
<<<<<<< HEAD


}

=======
}
>>>>>>> a503670c99869a4176ce5836cc82f5e00efc5573
export interface Usuario {
    nombre: string;
    apellido: string;
    edad: number
<<<<<<< HEAD
}
=======
}
>>>>>>> a503670c99869a4176ce5836cc82f5e00efc5573
