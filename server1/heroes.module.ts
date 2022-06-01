import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { HeroController } from './hero.controller';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';

@Module({
  imports: [CqrsModule],
  controllers: [HeroController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...QueryHandlers
  ],
})
export class HeroModule {}
