import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
@Injectable()
export class LogMiddleware implements NestMiddleware{
    contructor(private _usuarioService: UsuarioService){

    }
    resolve(nombreAplicacion: string, anio: number): MiddlewareFunction {
        return (request, response, next) => {
            const respuesta = {
                baseUrl:request.baseUrl,
                hostname:request.hostname,
                subdomains:request.subdomains,
                ip:request.ip,
                method:request.method,
                originalUrl:request.originalUrl,
                path:request.path,
                protocol:request.protocol,
                headers:request.headers,
            };
            console.log('***DESDE MIDDLEWARE***', nombreAplicacion, anio, this._usuarioService.mostrarUsuarios());
            console.log('respuesta');
            next();//error si no se llama
        };
    }
}