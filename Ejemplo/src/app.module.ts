import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log. middleware";

@Module({
    imports: [ // OtrosModulos
    ],
    controllers: [ // Controladores
        AppController,
        UsuarioController,
        ParametrosController
    ],
    components: [
    ],
})
export class AppModule implements NestModule{
    nombreAplicacion= 'EPN';
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