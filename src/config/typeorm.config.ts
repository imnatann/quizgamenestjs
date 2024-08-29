import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1wldream',
    database: 'quiz',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}
