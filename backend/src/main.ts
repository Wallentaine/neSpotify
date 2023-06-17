import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule);

        app.enableCors();

        await app.listen(PORT);
    } catch (error) {
        console.log(error);
    }
};

start().then(() => {
    console.log(`Server started on port ${PORT}`);
});
