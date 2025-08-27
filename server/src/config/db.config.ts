import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as url from 'url';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const dbUrl = configService.get<string>('DATABASE_URL');
  if (!dbUrl) {
    throw new Error('DATABASE_URL is not defined in the environment variables');
  }

  const parsedUrl = new url.URL(dbUrl);

  return {
    type: 'mysql',
    host: parsedUrl.hostname,
    port: parseInt(parsedUrl.port),
    username: parsedUrl.username,
    password: parsedUrl.password,
    database: parsedUrl.pathname.replace('/', ''),
    autoLoadEntities: true,
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/src/migrations/*{.ts,.js}'],
  };
};
