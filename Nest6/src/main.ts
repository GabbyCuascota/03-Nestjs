
<<<<<<< HEAD
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
=======
>>>>>>> a503670c99869a4176ce5836cc82f5e00efc5573

const cookieParser = require('cookie-parser');

// npm i cookie-parser --save
async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    await app.listen(3000);
}

bootstrap();