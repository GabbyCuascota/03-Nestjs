import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario.service";
import {ParametrosController} from "../../Ejemplo/src/parametros.controller";
import {UsuarioController} from "./usuario.controller";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log. middleware";

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