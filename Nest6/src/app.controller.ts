import {Controller, Get, ReflectMetadata, Req, Res, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {JwtGuard} from "./guards/jwt.guard";

@Controller()
@UseGuards(JwtGuard)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    root(
        @Req() req,
        @Res() res,) {
        res.set('x-frame-options', 'SAMEORIGIN');
        return res.send('Hello word');
    }

    @Get('hola')
    @ReflectMetadata("nesecitaProteccion", true)
    hola(): string {
        return 'Hola amigos';
    }
}
