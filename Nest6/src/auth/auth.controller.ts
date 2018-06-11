import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController {
    constructor(
        private  _jwtService: JwtService
    ) {
    }

    @Post('login')
    login(
        @Body('username') username: string,
        @Body('password') password: string,
    ) {
        const enviaUsername = username;
        const enviaPassword = password;
        const enviaParametros = enviaPassword && enviaUsername;
        if (enviaParametros) {
            if (username === 'gabrielacuascota' && password === '1234') {
                const payload = {
                    username: username
                };
                const respuestaToken = {
                    jwt: this._jwtService.emitirToken(payload)
                };
                return respuestaToken;
            } else {
                throw new BadRequestException({
                    mensaje: 'credenciales invalidas'
                })
            }
        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }

    }

}