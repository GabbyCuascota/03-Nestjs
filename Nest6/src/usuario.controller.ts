
import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";
import Status = jest.Status;
import {UsuarioService} from "./usuario.service";

// decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Eguez',
        edad: 28
    };
usuarios = [];
    constructor(private _usuarioService: UsuarioService)    {

<<<<<<< HEAD
    usuarios = [];

    constructor(private _usuarioService: UsuarioService) {

    }

=======
    }
>>>>>>> a503670c99869a4176ce5836cc82f5e00efc5573
    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario(
        @Res() response
    ) {
        const usuarios = this._usuarioService.mostrarUsuarios();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);
        return response
            .status(200)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(
        @Req() request,
        @Res() response
    ) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

        return response
            .status(201)
            .send(usuarioCreado);
    }


}