import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario.service";
import {ParametrosController} from "../../Ejemplo/src/parametros.controller";
import {UsuarioController} from "./usuario.controller";
import {LogMiddleware} from "../../Ejemplo/src/log. middleware";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";

@Module({
    imports: [],
    controllers: [
        AppController,
        UsuarioController,
        ParametrosController],
    providers: [AppService,
        UsuarioService
    ],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1991)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            );
        //.apply(otro Middleware)
        // .forRoutes(otras rutas)
    }
}