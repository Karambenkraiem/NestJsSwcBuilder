import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
